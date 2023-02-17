import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'


export function Panorama(props) {
    const texture = useLoader(TextureLoader, props.filename)
    return (
        <>
            <group>
                <mesh>
                    <sphereGeometry args={[500, 60, 40]} scale={[- 1, 1, 1]} />
                    {/* <meshStandardMaterial color='orange'/> */}
                    <meshBasicMaterial map={texture} side={THREE.BackSide} />                 
                </mesh>              
            </group>
        </>
    )
}