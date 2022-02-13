import { FiCheck } from "react-icons/fi"
import { ProgressBarStep, ProgressBarCircle, ProgressBarContainer, ProgressBarTitle, ProgressBarCheck } from "./StyledComponents";

function ProgressBar(props) {
    const { step, titles} = props
    return ( 
        <ProgressBarContainer>
            {titles.map((title, index) => 
            <ProgressBarStep key={index}>
                <ProgressBarTitle>{title}</ProgressBarTitle>
                <div style={{display:"flex", justifyContent:"center"}}>
                <ProgressBarCircle>
                    <span>{index+1}</span>
                </ProgressBarCircle>
                <ProgressBarCheck><FiCheck /></ProgressBarCheck>
                </div>
            </ProgressBarStep>
            )}
            
        </ProgressBarContainer>
     );
}

export default ProgressBar;