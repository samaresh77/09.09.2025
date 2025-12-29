from gtts import gTTS
import os

def text_to_speech(text: str, output_path: str):
    tts = gTTS(text)
    tts.save(output_path)
