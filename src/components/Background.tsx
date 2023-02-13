import React from 'react'
import styled, { keyframes } from 'styled-components'


type Props = {
    children: React.ReactNode
}

const Background = ({ children}: Props) => {
    return (
        <DivBlack>
            <DivPoints/>
            {children}
        </DivBlack>
    )
}

const zoomIn = keyframes`
    0%   { transform: scale(1); }
    100% { transform: scale(1.5); }
`

const DivPoints = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    animation: ${zoomIn} 7s alternate infinite;
    box-shadow: -24vw 44vh 2px 1px #fff,50vw 38vh 2px 1px #fff,-24vw -46vh 0px 0px #fff,-6vw -18vh 3px 0px #fff,10vw 47vh 0px 3px #fff,-41vw 28vh 0px 1px #fff,14vw 47vh 3px 3px #fff,6vw 33vh 3px 2px #fff,34vw 36vh 3px 2px #fff,-9vw -1vh 2px 3px #fff,49vw -38vh 1px 0px #fff,47vw 35vh 2px 0px #fff,22vw -40vh 3px 0px #fff,20vw 25vh 2px 0px #fff,12vw 26vh 2px 0px #fff,49vw -49vh 1px 0px #fff,28vw -14vh 1px 0px #fff,13vw 18vh 0px 3px #fff,3vw 25vh 1px 3px #fff,-38vw 12vh 1px 1px #fff,30vw -28vh 3px 3px #fff,38vw 21vh 0px 2px #fff,23vw -27vh 3px 3px #fff,-15vw 39vh 0px 3px #fff,7vw -44vh 1px 1px #fff,24vw 40vh 1px 2px #fff,21vw -8vh 3px 3px #fff,-38vw 38vh 2px 1px #fff,13vw 22vh 3px 1px #fff,-8vw 34vh 1px 1px #fff,-32vw -44vh 0px 3px #fff,-13vw 3vh 2px 2px #fff,-45vw 18vh 2px 2px #fff,42vw -40vh 0px 2px #fff,27vw -29vh 0px 0px #fff,-5vw -32vh 2px 3px #fff,-7vw 42vh 3px 2px #fff,39vw -48vh 3px 2px #fff,-30vw -14vh 1px 3px #fff,32vw -18vh 1px 1px #fff,-34vw -7vh 1px 0px #fff,-48vw 0vh 3px 2px #fff,-43vw 44vh 0px 3px #fff,4vw -15vh 0px 1px #fff,5vw 9vh 0px 0px #fff,21vw 9vh 0px 0px #fff,-25vw -42vh 3px 3px #fff,11vw -21vh 0px 3px #fff,-14vw -48vh 3px 1px #fff,22vw -20vh 3px 0px #fff,-48vw -10vh 3px 1px #fff,45vw 2vh 0px 1px #fff,-11vw 33vh 1px 3px #fff,47vw -8vh 1px 0px #fff,-35vw -14vh 1px 0px #fff,10vw -9vh 1px 3px #fff,-27vw 1vh 2px 0px #fff,39vw 29vh 2px 3px #fff,6vw -7vh 0px 3px #fff,-15vw 23vh 2px 0px #fff,48vw 18vh 2px 3px #fff,-49vw -38vh 2px 0px #fff,44vw 10vh 1px 1px #fff,-30vw 12vh 0px 0px #fff,21vw -26vh 1px 2px #fff,-30vw 4vh 3px 1px #fff,27vw 49vh 3px 0px #fff,43vw -22vh 2px 2px #fff,8vw 28vh 1px 0px #fff,-35vw 28vh 0px 3px #fff,22vw 50vh 1px 0px #fff,-14vw 41vh 3px 0px #fff,32vw 3vh 0px 2px #fff,-41vw -46vh 1px 0px #fff,-15vw -44vh 0px 3px #fff,-35vw -15vh 1px 2px #fff,35vw -28vh 0px 0px #fff,-3vw -46vh 0px 3px #fff,21vw -15vh 3px 1px #fff,-24vw -19vh 1px 2px #fff,26vw -13vh 2px 0px #fff,38vw 44vh 1px 0px #fff,38vw -15vh 0px 1px #fff,26vw -28vh 1px 1px #fff,-28vw -23vh 2px 2px #fff,-21vw 50vh 0px 3px #fff,45vw 6vh 2px 0px #fff,44vw -49vh 1px 3px #fff,-24vw -19vh 3px 1px #fff,-45vw 5vh 3px 2px #fff,-46vw 37vh 1px 2px #fff,5vw -17vh 2px 1px #fff,-34vw 22vh 3px 0px #fff,-35vw -49vh 3px 2px #fff,-27vw -20vh 2px 2px #fff,36vw -35vh 0px 3px #fff,-43vw 30vh 0px 0px #fff,47vw -3vh 2px 0px #fff,13vw -8vh 1px 1px #fff,29vw -24vh 1px 1px #fff;
`

const DivBlack = styled.div`
    min-height: 100vh;
    height: auto;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: absolute;
    left: 0px;
    top: 0px;

    background: black;
`

export default Background