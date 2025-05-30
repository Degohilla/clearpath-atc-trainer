
import React from 'react';

export default function Scenarios() {
  const scenarios = [
    {
      title: "IFR Clearance to Paris (CDG)",
      atc: "Speedbird 472, Heathrow Ground, cleared to Charles de Gaulle via the LAM 3X departure, squawk 5623.",
      expected: "Cleared to Charles de Gaulle via LAM 3X departure, squawk 5623, Speedbird 472."
    },
    {
      title: "VFR Entry from Oxford",
      atc: "G-ABCD, Heathrow Tower, enter controlled airspace via the Staines VRP, remain VFR, report overhead at 2,000 feet.",
      expected: "Entering via Staines VRP, will report overhead at 2,000 feet, G-ABCD."
    },
    {
      title: "Pattern Work (Touch-and-Go)",
      atc: "G-ABCD, join left-hand downwind Runway 09L, report final.",
      expected: "Join left-hand downwind 09L, will report final, G-ABCD."
    }
  ];

  return (
    <div>
      <h2>Scenarios</h2>
      <ul>
        {scenarios.map((scenario, index) => (
          <li key={index}>
            <strong>{scenario.title}</strong><br />
            <em>ATC:</em> {scenario.atc}<br />
            <em>Expected Pilot Reply:</em> {scenario.expected}<br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
}
