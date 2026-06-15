import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * FloatingPlanets Component - Skill Category Planets
 * 
 * Design Philosophy:
 * - Five planets orbiting the central energy sphere
 * - Each planet represents a skill category
 * - Hover reveals holographic information
 * - Click to navigate to detailed section
 */

interface Planet {
  id: string;
  name: string;
  color: string;
  position: [number, number, number];
  description: string;
}

const planets: Planet[] = [
  {
    id: 'web',
    name: 'Web Development',
    color: '#00d9ff',
    position: [20, 0, 0],
    description: 'React, Next.js, TypeScript',
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    color: '#b800e6',
    position: [-10, 17, 0],
    description: 'Flutter, React Native',
  },
  {
    id: 'desktop',
    name: 'Desktop Development',
    color: '#0066cc',
    position: [-10, -17, 0],
    description: 'Electron, C#, .NET',
  },
  {
    id: 'backend',
    name: 'Backend & Cloud',
    color: '#ff0066',
    position: [0, 0, 20],
    description: 'Node.js, AWS, Docker',
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    color: '#004d66',
    position: [0, 0, -20],
    description: 'Figma, Design Systems',
  },
];

interface PlanetMeshProps {
  planet: Planet;
  onHover: (id: string | null) => void;
  hoveredId: string | null;
}

function PlanetMesh({ planet, onHover, hoveredId }: PlanetMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const isHovered = hoveredId === planet.id;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;

      if (isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }

    if (glowRef.current && glowRef.current.material) {
      glowRef.current.rotation.x -= 0.003;
      glowRef.current.rotation.y -= 0.005;

      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      if (isHovered) {
        material.opacity = 0.6;
      } else {
        material.opacity = 0.2;
      }
    }
  });

  return (
    <group position={planet.position}>
      {/* Planet Mesh */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => onHover(planet.id)}
        onPointerLeave={() => onHover(null)}
      >
        <icosahedronGeometry args={[2, 3]} />
        <meshStandardMaterial
          color={planet.color}
          emissive={planet.color}
          emissiveIntensity={isHovered ? 0.8 : 0.3}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Glow Effect */}
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[2.3, 3]} />
        <meshBasicMaterial
          color={planet.color}
          transparent={true}
          opacity={0.2}
          wireframe={true}
        />
      </mesh>

      {/* Orbit Ring */}
      <mesh rotation={[Math.PI / 2.0, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshBasicMaterial color={planet.color} transparent={true} opacity={0.3} />
      </mesh>

      {/* Point Light */}
      <pointLight
        position={[0, 0, 0]}
        intensity={isHovered ? 1 : 0.5}
        color={planet.color}
        distance={15}
      />
    </group>
  );
}

interface FloatingPlanetsProps {
  onPlanetClick?: (planetId: string) => void;
}

export default function FloatingPlanets({ onPlanetClick }: FloatingPlanetsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <group>
      {planets.map((planet) => (
        <group
          key={planet.id}
          onClick={() => onPlanetClick?.(planet.id)}
        >
          <PlanetMesh
            planet={planet}
            onHover={setHoveredId}
            hoveredId={hoveredId}
          />
        </group>
      ))}
    </group>
  );
}
