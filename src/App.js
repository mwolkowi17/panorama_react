
import './App.css';
import { Box } from './Box';
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Panorama } from './Panorama_formatka';
import { Strzalka } from './Strzalka';
import { StrzalkaDiferent } from './StrzalkaDiferent';
import { OrbitControls } from '@react-three/drei'




function App() {
  return (
    <>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[20, -20, -50]} /> */}
        {/* <Strzalka position={[30,30,-50]} /> */}
        <StrzalkaDiferent position={[40,-40,-90]} scale={[6,0.5,6]}/>
        <Panorama position={[0, 0, 0]} />
        <OrbitControls />

      </Canvas>
    </>
  );
}

export default App;
