import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

export function Strzalka() {

    const gltf = useLoader(GLTFLoader,'./strzalka.glb')

    return (
        <Suspense fallback={null}>
            <primitive object={gltf.scene} />
        </Suspense>
    )

}