import styled from 'styled-components'
import {setSignUp} from '../../services/APIs';
import {useState} from 'react';

import Button from "../Generics/Button";
import Logo from "../Generics/Logo"
import { useNavigate, Link } from 'react-router-dom';

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

        setStateButton(true)
        setSignUp(user).then(req => {
            setStateButton(false)
            navigate('/')
        });
        setSignUp(user).catch(e => {
            console.log(e)
            alert('Cadastro inválido! Tente novamente...')
            setStateButton(false)
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
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <input type="text" placeholder="Nome" value={userName} onChange={e => setUserName(e.target.value)} required/>
                <input type="url" placeholder="Foto" value={picture} onChange={e => setPicture(e.target.value)} required/>            
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