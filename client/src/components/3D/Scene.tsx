import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useEffect } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Scene Component - Cyberpunk Command Center
 * 
 * Design Philosophy:
 * - Deep space environment with thousands of stars
 * - Volumetric fog effect for depth
 * - Particle system for ambient movement
 * - Dynamic lighting with neon accents
 */

function ParticleField() {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const geometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    meshRef.current.geometry = geometry;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.00005;
      meshRef.current.rotation.y += 0.00008;
    }
  });

  return (
    <mesh ref={meshRef}>
      <bufferGeometry />
      <pointsMaterial
        transparent
        color="#00d9ff"
        size={0.15}
        sizeAttenuation={true}
        opacity={0.3}
      />
    </mesh>
  );
}

function NebulaMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.00002;
      meshRef.current.rotation.y += 0.00003;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -50]}>
      <sphereGeometry args={[100, 64, 64]} />
      <meshBasicMaterial
        color="#1a0033"
        wireframe={false}
        transparent={true}
        opacity={0.1}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas
        camera={{
          position: [0, 0, 50],
          fov: 75,
          near: 0.1,
          far: 10000,
        }}
        style={{
          background: '#0a0a0a',
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} color="#0066cc" />
          <pointLight position={[50, 50, 50]} intensity={0.5} color="#00d9ff" />
          <pointLight position={[-50, -50, -50]} intensity={0.3} color="#b800e6" />

          {/* Space Environment */}
          <Stars radius={200} depth={100} count={5000} factor={4} saturation={0.5} fade speed={1} />
          <NebulaMesh />
          <ParticleField />

          {/* Camera Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Volumetric Fog Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.3) 100%)',
        }}
      />
    </div>
  );
}
