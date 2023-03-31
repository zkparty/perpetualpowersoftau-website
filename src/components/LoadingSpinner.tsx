import styled, { keyframes } from "styled-components";
import { mainLightColor } from "../style/utils";

const LoadingSpinner = () => {

    return (
        <SpinnerContainer>
            <SpinnerLoading></SpinnerLoading>
        </SpinnerContainer>
    );
}

const Spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const SpinnerLoading = styled.div`
    width: 12px;
    height: 12px;

    border-radius: 50%;
    border: 4px solid ${mainLightColor};
    border-color: ${mainLightColor} transparent ${mainLightColor} transparent;

    animation: ${Spin} 1.5s linear infinite;
`;
const SpinnerContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0px !important;
    height: auto;
`;

export default LoadingSpinner;