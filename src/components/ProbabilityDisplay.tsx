import React from 'react';
import { calculateP0, calculateP1 } from '../utils/quantumMath';

interface ProbabilityDisplayProps {
  phiRadians: number;
}

export const ProbabilityDisplay: React.FC<ProbabilityDisplayProps> = ({ phiRadians }) => {
  const p0 = calculateP0(phiRadians);
  const p1 = calculateP1(phiRadians);

  return (
    <div className="probability-display">
      <h2>Teorik Olasılıklar</h2>
      <div className="probabilities">
        <div className="probability-item">
          <div className="probability-label">P(0)</div>
          <div className="probability-value">
            <div className="value-decimal">{p0.toFixed(4)}</div>
            <div className="value-percentage">{(p0 * 100).toFixed(2)}%</div>
          </div>
          <div className="probability-bar">
            <div
              className="probability-bar-fill"
              style={{ width: `${p0 * 100}%`, backgroundColor: '#4a90e2' }}
            />
          </div>
        </div>
        <div className="probability-item">
          <div className="probability-label">P(1)</div>
          <div className="probability-value">
            <div className="value-decimal">{p1.toFixed(4)}</div>
            <div className="value-percentage">{(p1 * 100).toFixed(2)}%</div>
          </div>
          <div className="probability-bar">
            <div
              className="probability-bar-fill"
              style={{ width: `${p1 * 100}%`, backgroundColor: '#e24a4a' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

