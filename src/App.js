
import './App.css';
import { Box } from './Box';
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Panorama } from './Panorama_formatka';
import { Html } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'


const Torus = (props) => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.x += 0.01;
    groupRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={groupRef}>
      <mesh {...props}>
        <torusGeometry args={[1, 0.2, 12, 36]} />
        <meshStandardMaterial color={"red"} />
        <Html className='my'>
          <div className="label">Torus</div>
        </Html>
      </mesh>
    </group>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[20, -20, -50]} />
        <Panorama position={[0, 0, 0]} />
        <OrbitControls />

      </Canvas>
    </>
  );
}

export default App;
