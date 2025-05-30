
import React from 'react';

export default function Glossary() {
  const terms = [
    { term: "Squawk", definition: "A 4-digit transponder code assigned by ATC for radar identification." },
    { term: "Hold Short", definition: "Instruction to stop before entering a runway or taxiway." },
    { term: "VRP", definition: "Visual Reporting Point used for VFR navigation and entry." },
    { term: "Line Up and Wait", definition: "Instruction to move onto the runway and hold position for takeoff clearance." },
    { term: "QNH", definition: "Pressure setting for altimeter to indicate altitude above mean sea level." },
  ];

  return (
    <div>
      <h2>Glossary</h2>
      <ul>
        {terms.map((item, index) => (
          <li key={index}>
            <strong>{item.term}:</strong> {item.definition}
          </li>
        ))}
      </ul>
    </div>
  );
}
