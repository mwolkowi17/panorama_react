import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function StrzalkaDiferent(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('./strzalka2.gltf')

    const [hovered, setHover] = useState(false)
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh castShadow receiveShadow 
        geometry={nodes.Cube.geometry} 
        material={materials['Material']}
        scale={hovered ? 1.5 : 1}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)} />
        {/* <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} /> */}
      </group>
    )
  }
  
  useGLTF.preload('./strzalka2.gltf')