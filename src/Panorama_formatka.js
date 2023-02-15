import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export function Panorama(){
    const texture = useLoader(TextureLoader, './index.png')
    return(
        <mesh>
             <sphereGeometry args={[500, 60, 40]} scale={[- 1, 1, 1]}/>
             {/* <meshStandardMaterial color='orange'/> */}
             <meshBasicMaterial map={texture} side={THREE.BackSide}/>
        </mesh>
    )
}