"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.InstancedMesh>(null);
  const count = 200;

  const particles = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 6,
        z: (Math.random() - 0.5) * 4,
        speed: 0.2 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() < 0.3 ? "#F36A3D" : "#FFB088",
        opacity: 0.4 + Math.random() * 0.3,
      });
    }
    return data;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!ref.current) return;
    particles.forEach((p, i) => {
      const t = state.clock.elapsedTime;
      dummy.position.set(
        p.x + Math.sin(t * p.speed + p.phase) * 0.1,
        p.y + Math.sin(t * p.speed * 2 + p.phase) * 0.3,
        p.z,
      );
      dummy.rotation.z = Math.sin(t + p.phase) * 0.5;
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.01, 0.08, 0.01]} />
      <meshStandardMaterial color="#FFB088" transparent opacity={0.5} />
    </instancedMesh>
  );
}

export function FiberParticles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }} frameloop="always">
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
