import styled from "styled-components";
import {useState, React} from "react";
import {setLogin} from "../../services/APIs";
import { useNavigate, Link } from 'react-router-dom';
import { useSession } from '../../services/Session';
import Button from "../Generics/Button";
import Input from "../Generics/Input";
import Logo from "../Generics/Logo";

export default function Login(){
    // LOGIC
    const {setSession} = useSession();
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
            let session = {
                name: req.data.name,
                token: req.data.token,
                img: req.data.image
            }

            setSession(session)
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
                <Input type="email" placeholder="email" value={email} setValue={setEmail} isRequired={true} stateButton={stateButton} />
                <Input type="password" placeholder="senha" value={password} setValue={setPassword} isRequired={true} stateButton={stateButton} />
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