import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Text } from '@react-three/drei';
import * as THREE from 'three';

interface BlochSphereProps {
  phiRad: number;
}

/**
 * Bloch vektörünü hesaplar
 * Rx(φ)|0> için: x = 0, y = -sin(φ), z = cos(φ)
 */
function calculateBlochVector(phiRad: number): [number, number, number] {
  return [0, -Math.sin(phiRad), Math.cos(phiRad)];
}

/**
 * Bloch küresindeki eksenleri çizen bileşen
 */
const Axes: React.FC = () => {
  const axisLength = 1.2;
  const axisRadius = 0.02;

  return (
    <>
      {/* X ekseni - Kırmızı */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[axisRadius, axisRadius, axisLength]} />
        <meshStandardMaterial color="#e24a4a" />
      </mesh>
      <mesh position={[axisLength, 0, 0]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color="#e24a4a" />
      </mesh>
      <Text position={[axisLength + 0.15, 0, 0]} fontSize={0.1} color="#e24a4a">
        X
      </Text>

      {/* Y ekseni - Yeşil */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[axisRadius, axisRadius, axisLength]} />
        <meshStandardMaterial color="#4ae24a" />
      </mesh>
      <mesh position={[0, axisLength, 0]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color="#4ae24a" />
      </mesh>
      <Text position={[0, axisLength + 0.15, 0]} fontSize={0.1} color="#4ae24a">
        Y
      </Text>

      {/* Z ekseni - Mavi */}
      <mesh>
        <cylinderGeometry args={[axisRadius, axisRadius, axisLength]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      <mesh position={[0, 0, axisLength]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      <Text position={[0, 0, axisLength + 0.15]} fontSize={0.1} color="#4a90e2">
        Z
      </Text>
    </>
  );
};

/**
 * Bloch küresini çizen bileşen (yarı saydam küre)
 */
const Sphere: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#e0e0e0"
        opacity={0.3}
        transparent
        wireframe
      />
    </mesh>
  );
};

/**
 * Bloch vektörünü çizen bileşen (ok şeklinde)
 */
const StateVector: React.FC<{ phiRad: number }> = ({ phiRad }) => {
  const [x, y, z] = useMemo(() => calculateBlochVector(phiRad), [phiRad]);

  // Vektörün uzunluğu
  const length = Math.sqrt(x * x + y * y + z * z);

  // Vektör yönü için rotasyon hesaplama
  const direction = new THREE.Vector3(x, y, z).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, 1),
    direction
  );

  return (
    <group>
      {/* Ana vektör çizgisi */}
      <mesh quaternion={quaternion} position={[x / 2, y / 2, z / 2]}>
        <cylinderGeometry args={[0.03, 0.03, length, 16]} />
        <meshStandardMaterial color="#ff6b35" />
      </mesh>

      {/* Ok başı */}
      <mesh position={[x, y, z]}>
        <coneGeometry args={[0.08, 0.15, 8]} />
        <meshStandardMaterial color="#ff6b35" />
      </mesh>

      {/* Başlangıç noktası (küçük küre) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
    </group>
  );
};

/**
 * 3D sahne içeriği
 */
const Scene: React.FC<{ phiRad: number }> = ({ phiRad }) => {
  return (
    <>
      {/* Işıklandırma */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} />

      {/* Grid (referans için) */}
      <Grid
        args={[10, 10]}
        cellColor="#e0e0e0"
        sectionColor="#d0d0d0"
        fadeDistance={5}
        fadeStrength={1}
      />

      {/* Bloch küresi */}
      <Sphere />

      {/* Eksenler */}
      <Axes />

      {/* Bloch vektörü */}
      <StateVector phiRad={phiRad} />
    </>
  );
};

/**
 * Bloch küresi görselleştirme bileşeni
 * H-RZ(φ)-H devresinin Rx(φ)|0> durumunu gösterir
 */
export const BlochSphere: React.FC<BlochSphereProps> = ({ phiRad }) => {
  return (
    <div className="bloch-sphere-container">
      <h2>Bloch Küresi Gösterimi</h2>
      <div className="bloch-canvas-wrapper">
        <Canvas
          camera={{ position: [2.5, 2.5, 2.5], fov: 50 }}
          gl={{ antialias: true }}
        >
          <Scene phiRad={phiRad} />
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            minDistance={2}
            maxDistance={6}
          />
        </Canvas>
      </div>
      <div className="bloch-explanation">
        <p>
          Ok, H–RZ(φ)–H devresi uygulandıktan sonra kubitin Bloch vektörünü gösterir.
        </p>
        <p>
          φ açısı değiştikçe, vektör Bloch küresinin x ekseni etrafında döner.
        </p>
      </div>
    </div>
  );
};

