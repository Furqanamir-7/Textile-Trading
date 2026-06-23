"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { exportCountries, originCountry } from "@/data/export-countries";

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function Globe({
  onHover,
  onSelect,
  paused,
}: {
  onHover: (name: string | null) => void;
  onSelect: (name: string) => void;
  paused: boolean;
}) {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current && !paused) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  const routes = useMemo(() => {
    const origin = latLonToVector3(originCountry.lat, originCountry.lon, 2.02);
    return exportCountries.slice(0, 6).map((country) => {
      const dest = latLonToVector3(country.lat, country.lon, 2.02);
      const mid = origin.clone().add(dest).multiplyScalar(0.5).normalize().multiplyScalar(2.8);
      const curve = new THREE.CatmullRomCurve3([origin, mid, dest]);
      const points = curve.getPoints(50);
      return { country: country.name, points };
    });
  }, []);

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#1A1A2E"
          emissive="#2A2A4E"
          emissiveIntensity={0.3}
          roughness={0.8}
        />
      </mesh>

      {routes.map((route) => (
        <Line
          key={route.country}
          points={route.points}
          color="#F36A3D"
          lineWidth={1}
          dashed
          dashScale={2}
          transparent
          opacity={0.6}
        />
      ))}

      {exportCountries.map((country) => {
        const pos = latLonToVector3(country.lat, country.lon, 2.05);
        return (
          <mesh
            key={country.name}
            position={pos}
            onPointerOver={(e: ThreeEvent<PointerEvent>) => {
              e.stopPropagation();
              onHover(country.name);
            }}
            onPointerOut={() => onHover(null)}
            onClick={(e: ThreeEvent<MouseEvent>) => {
              e.stopPropagation();
              onSelect(country.name);
            }}
          >
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial
              color="#F36A3D"
              emissive="#F36A3D"
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

interface TradeGlobeProps {
  className?: string;
  large?: boolean;
  onCountrySelect?: (name: string) => void;
}

export function TradeGlobe({ className = "", large = false, onCountrySelect }: TradeGlobeProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <div className={`relative aspect-square w-full ${large ? "max-w-3xl" : "max-w-xl"} mx-auto ${className}`}>
      {hovered && (
        <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-pill bg-primary px-4 py-1 text-sm font-semibold text-white">
          {hovered}
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0, large ? 6 : 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        frameloop="always"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => {
          setPaused(false);
          setHovered(null);
        }}
        aria-hidden="true"
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 5]} intensity={0.8} />
        <pointLight position={[-5, -3, -5]} intensity={0.4} color="#F36A3D" />
        <Globe
          onHover={setHovered}
          onSelect={(name) => onCountrySelect?.(name)}
          paused={paused}
        />
      </Canvas>
    </div>
  );
}
