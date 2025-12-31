import os
from google import genai

# Create Gemini client (v1 API)
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

SYSTEM_PROMPT = (
    "You are a helpful voice assistant. "
    "Answer clearly and briefly for voice output."
)

def gemini_reply(user_text: str) -> str:
    try:
        prompt = f"{SYSTEM_PROMPT}\n\nUser: {user_text}"

        response = client.models.generate_content(
            model="gemini-1.5-flash",
            contents=prompt,   # ✅ MUST be a string
        )

        if not response or not response.text:
            return "I could not generate a response."

        return response.text.strip()

    except Exception as e:
        print("Gemini error:", repr(e))
        return "I am currently unavailable. Please try again later."
