import React, { useState } from 'react';
import { ControlPanel } from './components/ControlPanel';
import { ProbabilityDisplay } from './components/ProbabilityDisplay';
import { SimulationResults } from './components/SimulationResults';
import { CircuitExplanation } from './components/CircuitExplanation';
import { BlochSphere } from './components/BlochSphere';
import './styles.css';

function App() {
  const [phiDegrees, setPhiDegrees] = useState(90);
  const [numShots, setNumShots] = useState(1000);

  const phiRadians = (phiDegrees * Math.PI) / 180;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Adjustable Quantum Coin Flip (H–RZ–H Circuit) <br/> Ayarlanabilir Kuantum Yazı-Tura Deneyi (H–RZ–H Devresi)</h1>
        <div className="intro-text">
          <p>
            Bu uygulama, ayarlanabilir bir kuantum "yazı-tura" deneyini interaktif olarak 
            gösterir. Devre |0⟩ durumundan başlar ve H–RZ(φ)–H kapılarını uygular.
          </p>
          <p>
            <strong>Hadamard (H)</strong> kapısı süperpozisyon oluşturur, 
            <strong> RZ(φ)</strong> faz rotasyonu ekler, ve ikinci <strong>H</strong> kapısı 
            faz farklarını farklı ölçüm olasılıklarına dönüştürür. 
            φ açısı, kuantum yazı-turanın "bias"ını (eğilimini) kontrol eder.
          </p>
          <p>
            φ = 0° iken P(0) = 1, φ = 180° iken P(0) = P(1) = 0.5, 
            ve φ = 360° iken tekrar P(0) = 1 olur.
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="content-grid">
          <div className="content-section">
            <ControlPanel
              phiDegrees={phiDegrees}
              numShots={numShots}
              onPhiChange={setPhiDegrees}
              onShotsChange={setNumShots}
            />
          </div>

          <div className="content-section">
            <ProbabilityDisplay phiRadians={phiRadians} />
          </div>

          <div className="content-section bloch-section">
            <BlochSphere phiRad={phiRadians} />
          </div>

          <div className="content-section">
            <SimulationResults phiRadians={phiRadians} numShots={numShots} />
          </div>

          <div className="content-section">
            <CircuitExplanation />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

