
import './App.css';
import React, {useState} from 'react'
import { Canvas, } from '@react-three/fiber'
import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';
import { OrbitControls } from '@react-three/drei'





function App() {
const adress = ['./index.png','./kawiarnia3.png']
const [filenameAdres,SetAdress]=useState(adress[0])
  return (
    <>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[20, -20, -50]} /> */}
        {/* <Strzalka position={[30,30,-50]} /> */}
        <StrzalkaDiferent position={[55,-70,-140]} scale={[10,0.7,10]}  onClick={(event) => SetAdress(adress[1])} />
        <Panorama position={[0, 0, 0]} filename={filenameAdres}/>
        <OrbitControls />

      </Canvas>
    </>
  );
}

export default App;
