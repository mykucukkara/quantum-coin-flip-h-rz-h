import React from 'react';

interface ControlPanelProps {
  phiDegrees: number;
  numShots: number;
  onPhiChange: (phi: number) => void;
  onShotsChange: (shots: number) => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  phiDegrees,
  numShots,
  onPhiChange,
  onShotsChange,
}) => {
  const phiRadians = (phiDegrees * Math.PI) / 180;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPhiChange(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 360) {
      onPhiChange(value);
    }
  };

  const handleShotsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 100000) {
      onShotsChange(value);
    }
  };

  return (
    <div className="control-panel">
      <h2>Kontrol Paneli</h2>
      
      <div className="control-group">
        <label htmlFor="phi-slider">
          φ (phi) Açısı: <strong>{phiDegrees.toFixed(1)}°</strong>
        </label>
        <input
          id="phi-slider"
          type="range"
          min="0"
          max="360"
          step="0.1"
          value={phiDegrees}
          onChange={handleSliderChange}
          className="slider"
        />
        <div className="slider-labels">
          <span>0°</span>
          <span>180°</span>
          <span>360°</span>
        </div>
      </div>

      <div className="control-group">
        <label htmlFor="phi-input">
          φ (Derece):
        </label>
        <input
          id="phi-input"
          type="number"
          min="0"
          max="360"
          step="0.1"
          value={phiDegrees}
          onChange={handleInputChange}
          className="number-input"
        />
      </div>

      <div className="control-group">
        <label>
          φ (Radyan): <strong>{phiRadians.toFixed(4)}</strong>
        </label>
      </div>

      <div className="control-group">
        <label htmlFor="shots-input">
          Ölçüm Sayısı (Shots):
        </label>
        <input
          id="shots-input"
          type="number"
          min="1"
          max="100000"
          step="1"
          value={numShots}
          onChange={handleShotsChange}
          className="number-input"
        />
      </div>
    </div>
  );
};

