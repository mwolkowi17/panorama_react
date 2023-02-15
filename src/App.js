
import './App.css';
import { Box } from './Box';
import React from 'react'
import { Canvas} from '@react-three/fiber'
import { Panorama } from './Panorama_formatka';
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Panorama position={[0,0,0]} />
        <OrbitControls />
        
      </Canvas>
    </div>
  );
}

export default App;
