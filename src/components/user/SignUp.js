import styled from 'styled-components';
import {setSignUp} from '../../services/APIs';
import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Button from "../Generics/Button";
import Logo from "../Generics/Logo";
import Input from "../Generics/Input";

export default function SignUp(){
    
    // LOGIC
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [picture, setPicture] = useState('');

    const [stateButton, setStateButton] = useState(false);


    function signUp(e){
        e.preventDefault();

        const user = {
            email: email,
            name: userName,
            image: picture,
            password: password
        }

        setStateButton(true);
        setSignUp(user).then(req => {
            setStateButton(false);
            navigate('/');
        });
        setSignUp(user).catch(e => {
            console.log(e);
            alert('Cadastro inválido! Tente novamente...');
            setStateButton(false);
        });
    }

    // UI 
    return (
        <Wrapper>
            <div>
                <Logo/>
                <h1>TrackIt</h1>
            </div>
            
            <form onSubmit={signUp}>
                <Input type="email" placeholder="Email" value={email} setValue={setEmail} isRequired={true} stateButton={stateButton}/>
                <Input type="password" placeholder="Senha" value={password} setValue={setPassword} isRequired={true} stateButton={stateButton}/>
                <Input type="text" placeholder="Nome" value={userName} setValue={setUserName} isRequired={true} stateButton={stateButton}/>
                <Input type="url" placeholder="Foto" value={picture} setValue={setPicture} isRequired={true} stateButton={stateButton}/>
                <Button stateButton={stateButton} type="submit" text="Cadastrar"/>
            </form>
            <Link to="/">Não possui uma conta? Faça login!</Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;