import React from 'react';

export const CircuitExplanation: React.FC = () => {
  return (
    <div className="circuit-explanation">
      <h2>Devre ve Matematik Özeti</h2>
      
      <div className="circuit-diagram">
        <div className="circuit-text">
          |0⟩ — H — RZ(φ) — H — Ölçüm
        </div>
      </div>

      <div className="formulas">
        <h3>Olasılık Formülleri</h3>
        <div className="formula-item">
          <div className="formula-label">P(0) =</div>
          <div className="formula-expression">cos²(φ / 2)</div>
        </div>
        <div className="formula-item">
          <div className="formula-label">P(1) =</div>
          <div className="formula-expression">sin²(φ / 2)</div>
        </div>
      </div>

      <div className="explanation-text">
        <p>
          <strong>Not:</strong> Bu devre, Rx(φ) rotasyonuna eşdeğerdir. 
          İlk Hadamard kapısı süperpozisyon oluşturur, RZ(φ) faz farkı ekler, 
          ikinci Hadamard ise bu faz farkını ölçüm olasılıklarına dönüştürür.
        </p>
      </div>
    </div>
  );
};

