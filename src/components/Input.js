import styled from "styled-components";


export default function Input({type, placeholder, value, setValue, isRequired, stateButton}){

    let backgroundColor;
    let color;

    if(stateButton){
        backgroundColor = 'rgba(242, 242, 242, 1)';
        color = 'rgba(179, 179, 179, 1)';
    }
    else{
        backgroundColor = 'rgba(255, 255, 255, 1)';
        color = 'rgba(219, 219, 219, 1)';
    }

    if(isRequired){
        return (
            <Wrapper disabled={stateButton} backgroundColor={backgroundColor} color={color} type={type} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} required/>
        );
    }
    else{
        return (
            <Wrapper disabled={stateButton} backgroundColor={backgroundColor} color={color} type={type} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
        );
    }
}

const Wrapper = styled.input`
    width: 300px;
    height: 40px;
    padding-left: 10px;

    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 5px;
    font-size: 20px;

    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
`;