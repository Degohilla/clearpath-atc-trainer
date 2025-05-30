
import React from 'react';

export default function Tips() {
  const tips = [
    "Always start and end transmissions with your callsign.",
    "Listen carefully before you transmit to avoid stepping on others.",
    "Speak clearly, at a moderate pace.",
    "If unsure, use 'Say again' or 'Standby'.",
    "Repeat instructions back to ATC accurately.",
    "Know the phonetic alphabet (Alpha, Bravo, Charlie, etc.).",
    "Be prepared for rapid changes in busy airspace like Heathrow."
  ];

  return (
    <div>
      <h2>Beginner Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
