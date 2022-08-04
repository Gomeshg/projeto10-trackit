import styled from 'styled-components'
import { ThreeDots } from  'react-loader-spinner'



export default function Button({stateButton, text}){
    let backgroundColor = 'rgba(82, 182, 255, 1)';
    let color = 'rgba(255, 255, 255, 1)';

    let width;
    let height;
    let fontSize;

    if(text === 'Entrar' || text === 'Cadastrar'){
        width = '300px';
        height = '45px';
        fontSize = '20px'
    }

    else if(text === '+'){
        width = '40px';
        height = '35px';
        fontSize = '27px'
    }

    else if(text === 'Salvar'){
        width = '84px';
        height = '35px';
        fontSize = '15px'

    }

    else if(text === 'Cancelar'){
        width = '84px';
        height = '35px';
        fontSize = '15px'

        backgroundColor = 'rgba(255, 255, 255, 1)'; 
        color = 'rgba(82, 182, 255, 1)'; 
    }

    if(stateButton){
        return (
            <Wrapper disabled={stateButton} color={color} backgroundColor={backgroundColor} width={width} height={height} fontSize={fontSize}>
                <ThreeDots height = "60" width = "60" radius = "9" color = 'white' ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass />
            </Wrapper>        
        );
    }
    else{
        return (
            <Wrapper disabled={stateButton} color={color} backgroundColor={backgroundColor} width={width} height={height} fontSize={fontSize}>{text}</Wrapper>        
        );
    }
}

const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    cursor: pointer;

    width: ${props => props.width};
    height: ${props => props.height};

    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize}
`;