import styled from "styled-components";
import { useSession } from '../../services/Session';
import Top from "../Generics/Top";
import Menu from "../Generics/Menu";

export default function Historic(){

    const {session} = useSession();

    return (
        <Wrapper>
            <Top img={session.img}/>

            <Title>
                <h3>Histórico</h3>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Title>
            <Menu/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: 100vh;
    max-height: min-content;
    background-color: rgba(0, 0, 0, 0.1);
    padding-top: 70px;
    padding-bottom: 110px;
`;

const Title = styled.div`
    width: 90%; 
    margin: 0 auto;
    padding: 30px 0px;
    p{
        color: rgba(186, 186, 186, 1);
        text-align: left;
    }
`;