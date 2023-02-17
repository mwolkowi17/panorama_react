import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';

export const PanoramaStart = (props) => {

    const adress = './index.png'
   
    return(
        <group>
            <Panorama position={[0, 0, 0]} filename={adress} />
            <StrzalkaDiferent position={[-65,-70,-140]} scale={[10,0.7,10]} onClick={props.action} />            
        </group>
    )
}