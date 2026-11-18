"use client";

import { useState } from "react";

export default function CopyEmail({ email }) {
  const [feedback, setFeedback] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setFeedback("Email address copied.");
    } catch {
      setFeedback("Couldn’t copy automatically. Select the address above to copy it.");
    }
  }

  return (
    <>
      <button type="button" className="button secondary" onClick={copy}>Copy email</button>
      <p className="copy-feedback" role="status">{feedback}</p>
    </>
  );
}
