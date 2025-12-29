from datetime import datetime

def process_command(text: str) -> str:
    text = text.lower()

    if "hello" in text:
        return "Hello Samaresh, how can I help you?"

    if "time" in text:
        return f"The current time is {datetime.now().strftime('%I:%M %p')}"

    if "your name" in text:
        return "I am your personal voice assistant"

    if "bye" in text:
        return "Goodbye Samaresh. Have a great day"

    return "Sorry, I did not understand that"
