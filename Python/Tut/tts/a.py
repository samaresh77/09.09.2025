from gtts import gTTS

tts = gTTS("Hello Samaresh, this works perfectly in Codespaces")
tts.save("speech.mp3")

print("speech.mp3 generated")