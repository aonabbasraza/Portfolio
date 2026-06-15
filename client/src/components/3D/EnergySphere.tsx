import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * EnergySphere Component - The Developer's Core
 * 
 * Design Philosophy:
 * - Central focal point representing the developer
 * - Rotates smoothly with pulsing energy
 * - Glows with neon cyan light
 * - Represents the heart of the digital universe
 */

interface EnergySphereProps {
  mousePosition?: { x: number; y: number };
}

export default function EnergySphere({ mousePosition }: EnergySphereProps) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [pulseScale, setPulseScale] = useState(1);

  useEffect(() => {
    // Pulse animation
    const timeline = gsap.timeline({ repeat: -1 });
    timeline.to(
      {},
      {
        duration: 2,
        onUpdate() {
          const progress = timeline.progress();
          const scale = 1 + Math.sin(progress * Math.PI * 2) * 0.1;
          setPulseScale(scale);
        },
      }
    );

    return () => {
      timeline.kill();
    };
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.002;
    }

    if (glowRef.current) {
      glowRef.current.rotation.x -= 0.0015;
      glowRef.current.rotation.y -= 0.001;
      glowRef.current.scale.set(pulseScale, pulseScale, pulseScale);
    }

    // React to mouse movement
    if (mousePosition && sphereRef.current) {
      const targetRotationX = (mousePosition.y / window.innerHeight) * 0.5;
      const targetRotationY = (mousePosition.x / window.innerWidth) * 0.5;

      sphereRef.current.rotation.x += (targetRotationX - sphereRef.current.rotation.x) * 0.05;
      sphereRef.current.rotation.y += (targetRotationY - sphereRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group>
      {/* Main Energy Sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[3, 4]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Glow/Aura */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[3.5, 4]} />
        <meshBasicMaterial
          color="#b800e6"
          transparent={true}
          opacity={0.2}
          wireframe={true}
        />
      </mesh>

      {/* Point Light */}
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#00d9ff" distance={50} />
    </group>
  );
}
