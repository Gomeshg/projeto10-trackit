import styled from "styled-components";
import {useState, React} from "react";
import {login} from "../../services/APIs"


import Button from "../Button";
import Logo from "../Logo"

export default function Login(){
    
    // LOGIC
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e){
        // e.preventDefault();

        // const user = {
        //     email: email,
        //     password: password
        // }
        // login(user).then(req => console.log(req));
        // login(user).catch(e => console.log(e))
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
                <Button type="submit" text="Entrar"/>
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