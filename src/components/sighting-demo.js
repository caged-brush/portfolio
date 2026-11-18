"use client";

import { useState } from "react";

const samples = [
  { address: "02:00:00:00:00:01", receiver: "demo-receiver-01", rssi: -55, timestamp: "2026-11-18T18:00:00Z" },
  { address: "02:00:00:00:00:01", receiver: "demo-receiver-01", rssi: -67, timestamp: "2026-11-18T18:00:05Z" },
  { address: "02:00:00:00:00:01", receiver: "demo-receiver-02", rssi: -62, timestamp: "2026-11-18T18:00:10Z" },
];

export default function SightingDemo() {
  const [index, setIndex] = useState(0);
  const sample = samples[index];

  return (
    <section className="demo" aria-labelledby="demo-title">
      <h2 id="demo-title">Explore a BLE reading</h2>
      <p>Step through simulated advertisements and see what a scanner captures. RSSI can vary as a tag moves or obstacles get in the way.</p>
      <div className="demo-controls" role="group" aria-label="Choose a simulated reading">
        {samples.map((entry, position) => (
          <button type="button" className="filter" aria-pressed={index === position} key={entry.timestamp} onClick={() => setIndex(position)}>
            Reading {position + 1}
          </button>
        ))}
      </div>
      <pre aria-label="Sample scanner output"><code>{JSON.stringify(sample, null, 2)}</code></pre>
      <p className="sr-only" role="status">Reading {index + 1}, {sample.receiver}, {sample.rssi} dBm</p>
    </section>
  );
}
