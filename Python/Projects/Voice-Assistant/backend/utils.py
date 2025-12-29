import os

def is_codespaces() -> bool:
    return (
        os.environ.get("CODESPACES") == "true"
        or "GITHUB_CODESPACE_TOKEN" in os.environ
        or "CODESPACE_NAME" in os.environ
    )
