import os
from openai import OpenAI
from openai import RateLimitError

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

SYSTEM_PROMPT = """
You are a helpful voice assistant.
Answer clearly and briefly.
Speak naturally.
"""

def chatgpt_reply(user_text: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_text},
            ],
            temperature=0.6,
            max_tokens=120,
        )
        return response.choices[0].message.content.strip()

    except RateLimitError:
        return (
            "I am currently unavailable due to usage limits. "
            "Please try again later."
        )

    except Exception:
        return "Something went wrong while thinking. Please try again."
