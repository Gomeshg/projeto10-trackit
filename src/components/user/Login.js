import styled from "styled-components";
import {useState, React} from "react";
import {setLogin} from "../../services/APIs";
import { useNavigate, Link } from 'react-router-dom';

import Button from "../Button";
import Logo from "../Logo";

export default function Login(){
    
    // LOGIC
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stateButton, setStateButton] = useState(false);

    function login(e){
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }
        
        setStateButton(true);

        setLogin(user).then(req => {
            // console.log(req.data);
            let session = {
                name: req.data.name,
                token: req.data.token,
                img: req.data.image
            }

            localStorage.setItem('session', JSON.stringify(session));
            setStateButton(false);
            navigate('/Today');
        });
        setLogin(user).catch(e => {
            console.log(e);
            alert('Login inválido, tente novamente!');
            setStateButton(false);
        })
    }

    // UI
    return(
        <Wrapper>
            <div>
                <Logo/>
                <h1>TrackIt</h1>
            </div>
            
            <form onSubmit={login}>
                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <Button stateButton={stateButton} type="submit" text="Entrar"/>
            </form>
            
            <Link to="/sign-up">Não possui uma conta? Cadastre-se!</Link>

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