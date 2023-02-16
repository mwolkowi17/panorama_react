import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StrzalkaDiferent(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('./strzalka.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Material']} />
        {/* <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} /> */}
      </group>
    )
  }
  
  useGLTF.preload('./strzalka.gltf')