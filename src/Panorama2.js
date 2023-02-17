import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';

export const Panorama2 = (props) => {

    const adress = './kawiarnia3.png'

    return(
        <group>
            <Panorama position={[0, 0, 0]} filename={adress} />
            <StrzalkaDiferent position={[-120,-70,-190]} scale={[10,0.7,10]} onClick={props.action1} />
            
        </group>
    )
}