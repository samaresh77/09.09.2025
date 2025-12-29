from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import subprocess

from assistant.stt import speech_to_text
from assistant.brain import process_command
from assistant.tts import text_to_speech

app = FastAPI(title="Voice Assistant API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

AUDIO_DIR = "audio"
os.makedirs(AUDIO_DIR, exist_ok=True)


@app.post("/voice-assistant")
async def voice_assistant(audio: UploadFile = File(...)):
    raw_path = f"{AUDIO_DIR}/input.webm"
    wav_path = f"{AUDIO_DIR}/input.wav"
    output_path = f"{AUDIO_DIR}/response.mp3"

    # 1️⃣ Save uploaded audio (webm/ogg)
    with open(raw_path, "wb") as buffer:
        shutil.copyfileobj(audio.file, buffer)

    # 2️⃣ Convert to PCM WAV (16kHz mono)
    try:
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i", raw_path,
                "-ar", "16000",
                "-ac", "1",
                wav_path,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    except subprocess.CalledProcessError:
        raise HTTPException(status_code=400, detail="Audio conversion failed")

    # 3️⃣ Speech to text
    text = speech_to_text(wav_path)

    if not text:
        response_text = "Sorry, I could not understand what you said. Please try again."
    else:
        response_text = process_command(text)

    # 4️⃣ Text to speech
    text_to_speech(response_text, output_path)

    return FileResponse(
        output_path,
        media_type="audio/mpeg",
        filename="response.mp3"
    )
