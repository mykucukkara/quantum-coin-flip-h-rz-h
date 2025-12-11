import React from 'react';
import { calculateP0, simulateShots } from '../utils/quantumMath';

interface SimulationResultsProps {
  phiRadians: number;
  numShots: number;
}

export const SimulationResults: React.FC<SimulationResultsProps> = ({
  phiRadians,
  numShots,
}) => {
  const [results, setResults] = React.useState<{ count0: number; count1: number } | null>(null);
  const [isRunning, setIsRunning] = React.useState(false);

  const p0 = calculateP0(phiRadians);
  const p1 = 1 - p0;

  const handleRunExperiment = () => {
    setIsRunning(true);
    // Küçük bir gecikme ekleyerek UI'ın güncellenmesini sağla
    setTimeout(() => {
      const simulatedResults = simulateShots(p0, numShots);
      setResults(simulatedResults);
      setIsRunning(false);
    }, 50);
  };

  const experimentalP0 = results ? results.count0 / numShots : 0;
  const experimentalP1 = results ? results.count1 / numShots : 0;

  return (
    <div className="simulation-results">
      <h2>Simülasyon / Deney Sonuçları</h2>
      
      <button
        onClick={handleRunExperiment}
        disabled={isRunning}
        className="run-button"
      >
        {isRunning ? 'Çalışıyor...' : 'Deneyi Çalıştır'}
      </button>

      {results && (
        <div className="results-content">
          <div className="results-counts">
            <div className="count-item">
              <div className="count-label">Ölçülen 0 Sayısı:</div>
              <div className="count-value">{results.count0}</div>
            </div>
            <div className="count-item">
              <div className="count-label">Ölçülen 1 Sayısı:</div>
              <div className="count-value">{results.count1}</div>
            </div>
          </div>

          <div className="comparison">
            <h3>Teorik vs. Deneysel</h3>
            <div className="comparison-table">
              <div className="comparison-row">
                <div className="comparison-cell">Sonuç</div>
                <div className="comparison-cell">Teorik</div>
                <div className="comparison-cell">Deneysel</div>
                <div className="comparison-cell">Fark</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">0</div>
                <div className="comparison-cell">{(p0 * 100).toFixed(2)}%</div>
                <div className="comparison-cell">{(experimentalP0 * 100).toFixed(2)}%</div>
                <div className="comparison-cell">
                  {Math.abs(p0 - experimentalP0).toFixed(4)}
                </div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">1</div>
                <div className="comparison-cell">{(p1 * 100).toFixed(2)}%</div>
                <div className="comparison-cell">{(experimentalP1 * 100).toFixed(2)}%</div>
                <div className="comparison-cell">
                  {Math.abs(p1 - experimentalP1).toFixed(4)}
                </div>
              </div>
            </div>
          </div>

          <div className="chart-container">
            <h3>Görsel Karşılaştırma</h3>
            <svg width="100%" height="200" className="comparison-chart">
              <g transform="translate(40, 20)">
                {/* 0 için teorik */}
                <rect
                  x="0"
                  y="0"
                  width={p0 * 300}
                  height="60"
                  fill="#4a90e2"
                  opacity="0.7"
                />
                <text x="5" y="35" fill="white" fontSize="12" fontWeight="bold">
                  Teorik P(0): {(p0 * 100).toFixed(1)}%
                </text>

                {/* 0 için deneysel */}
                <rect
                  x="0"
                  y="70"
                  width={experimentalP0 * 300}
                  height="60"
                  fill="#4a90e2"
                />
                <text x="5" y="105" fill="white" fontSize="12" fontWeight="bold">
                  Deneysel P(0): {(experimentalP0 * 100).toFixed(1)}%
                </text>

                {/* 1 için teorik */}
                <rect
                  x={p0 * 300}
                  y="0"
                  width={p1 * 300}
                  height="60"
                  fill="#e24a4a"
                  opacity="0.7"
                />
                <text
                  x={p0 * 300 + 5}
                  y="35"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  Teorik P(1): {(p1 * 100).toFixed(1)}%
                </text>

                {/* 1 için deneysel */}
                <rect
                  x={experimentalP0 * 300}
                  y="70"
                  width={experimentalP1 * 300}
                  height="60"
                  fill="#e24a4a"
                />
                <text
                  x={experimentalP0 * 300 + 5}
                  y="105"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  Deneysel P(1): {(experimentalP1 * 100).toFixed(1)}%
                </text>
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

