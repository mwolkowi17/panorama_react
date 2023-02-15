import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei';

export function Panorama() {
    const texture = useLoader(TextureLoader, './index.png')
    return (
        <>
            <group>


                <mesh>
                    <sphereGeometry args={[500, 60, 40]} scale={[- 1, 1, 1]} />
                    {/* <meshStandardMaterial color='orange'/> */}
                    <meshBasicMaterial map={texture} side={THREE.BackSide} />                 
                </mesh>
                {/* <Html position={[0, 0.05, 0.09]} transform occlude  >
                    <h1>hello</h1>
                    <p>world</p>
                </Html> */}
            </group>
        </>
    )
}