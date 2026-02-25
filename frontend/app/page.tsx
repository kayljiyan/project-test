"use client";

import { useState } from "react";
import styles from "./page.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      setIsError(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${API_URL}/uploadfile`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message || "Upload successful!");
      setIsError(false);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
      setIsError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Upload File</h1>

        <input
          type="file"
          className={styles.fileInput}
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />

        <br />

        <button className={styles.button} onClick={handleUpload}>
          Upload
        </button>

        {message && (
          <p className={isError ? styles.error : styles.message}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}