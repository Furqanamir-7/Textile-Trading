"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function SpoolMesh({ mouseReactive = false }: { mouseReactive?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;
    if (mouseReactive) {
      targetRotation.current.x = (state.pointer.y * Math.PI) / 6;
      targetRotation.current.y = (state.pointer.x * Math.PI) / 4;
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
    } else {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1.8, 32]} />
        <meshStandardMaterial color="#F5EDE0" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial color="#F36A3D" roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0, -0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial color="#F36A3D" roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 2, 16]} />
        <meshStandardMaterial color="#E8DCC8" roughness={0.4} metalness={0.05} />
      </mesh>
    </group>
  );
}

interface YarnSpoolProps {
  className?: string;
  mouseReactive?: boolean;
  large?: boolean;
}

export function YarnSpool({ className = "", mouseReactive = false, large = false }: YarnSpoolProps) {
  return (
    <div className={`aspect-square w-full ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, large ? 4.5 : 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        frameloop="always"
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF5E6" />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#F36A3D" />
        <SpoolMesh mouseReactive={mouseReactive} />
        <ContactShadows opacity={0.3} blur={2} position={[0, -1.2, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
