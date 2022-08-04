import styled from "styled-components";
import {useState, React} from "react";
import {setLogin} from "../../services/APIs"
import { useNavigate } from 'react-router-dom';


import Button from "../Button";
import Logo from "../Logo"

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
        
        setStateButton(!stateButton);

        setLogin(user).then(req => {
            console.log(req.data)
            let session = {
                name: req.data.name,
                token: req.data.token
            }
            localStorage.setItem('session', JSON.stringify(session))
            navigate('/Teste');
        });
        setLogin(user).catch(e => console.log(e))
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
        
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;