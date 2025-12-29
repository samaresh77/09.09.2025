import { useRef, useState } from "react";

export default function App() {
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [recording, setRecording] = useState(false);
  const [status, setStatus] = useState("");

  const startRecording = async () => {
    setStatus("Listening...");
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    recorderRef.current = new MediaRecorder(stream);
    chunksRef.current = [];

    recorderRef.current.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    recorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    setStatus("Processing...");
    recorderRef.current.stop();
    setRecording(false);

    recorderRef.current.onstop = async () => {
        try {
            const blob = new Blob(chunksRef.current, { type: "audio/wav" });
            const formData = new FormData();
            formData.append("audio", blob, "input.wav");

            const BACKEND_URL = "https://laughing-space-carnival-66vw54gw77v3rjpx-8000.app.github.dev";
            const res = await fetch(`${BACKEND_URL}/voice-assistant`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Backend error");
            }

            const audioBlob = await res.blob();
            const url = URL.createObjectURL(audioBlob);
            new Audio(url).play();

            setStatus("Done");
        } catch (err) {
            console.error(err);
            setStatus("Error communicating with backend");
        }
    };

  };

  return (
    <div style={styles.container}>
      <h1>🎙️ Voice Assistant</h1>

      <button
        onClick={recording ? stopRecording : startRecording}
        style={recording ? styles.stop : styles.start}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      <p>{status}</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },
  start: {
    padding: "14px 30px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  stop: {
    padding: "14px 30px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
