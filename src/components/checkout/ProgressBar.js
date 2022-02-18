import { BsCheckLg } from "react-icons/bs"
import { ProgressBarStep, ProgressBarContainer, ProgressBarTitle } from "./StyledComponents";

function ProgressBar(props) {
    const { step, titles} = props
    return ( 
        <ProgressBarContainer>
            {titles.map((title, index) => 
            <ProgressBarStep key={index}>
                <ProgressBarTitle>{title}</ProgressBarTitle>
                {step >= index && <BsCheckLg color="green" />}
            </ProgressBarStep>)}
        </ProgressBarContainer>
     );
}

export default ProgressBar;