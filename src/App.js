
import './App.css';
import React, { useState } from 'react'
import { Canvas, } from '@react-three/fiber'
import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';
import { OrbitControls } from '@react-three/drei';
import { Panorama2 } from './Panorama2';
import { PanoramaStart } from './PanoramaStart';





function App() {
  const adress = ['./index.png', './kawiarnia3.png', './kawiarnia4.png']
  const [filenameAdres, SetAdress] = useState(adress[0])
  const [ifPanaroma2, SetPanoram2] = useState(false);
  const [ifPanoramaStart, SetPanoramaStart] = useState(true);

  return (
    <>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <StrzalkaDiferent position={[55, -70, -140]} scale={[10, 0.7, 10]} onClick={(event) => { SetAdress(adress[1]) }} /> */}
        {/* <Panorama position={[0, 0, 0]} filename={filenameAdres}/> */}
        {ifPanoramaStart===true&&
          <PanoramaStart action={(event)=>{SetPanoramaStart(false); SetPanoram2(true)}} />
        }
        {ifPanaroma2===true&&
          <Panorama2 action1={(event)=>{SetPanoramaStart(true);SetPanoram2(false)}} />
        }
        <OrbitControls />

      </Canvas>
    </>
  );
}

export default App;
