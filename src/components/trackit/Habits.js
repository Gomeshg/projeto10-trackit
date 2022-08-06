import styled from "styled-components";
import { useSession } from '../../services/Session';
import {getHabits, setHabit, deleteHabit} from '../../services/APIs';
import {useState} from 'react';

import Button from '../Button';
import Top from "./Top";
import Menu from "./Menu";

export default function Habits(){

    // LOGIC
    const {session} = useSession();
    const [stateButton, setStateButton] = useState(false);

    const config = {
        headers: {
          "Authorization": `Bearer ${session.token}`  
        } 
    }
    
    if(session.token) {
        getHabits(config).then( req => console.log(req))
        getHabits(config).catch( e => console.log(e))
    }

    

    // UI
    return (
        <Wrapper>
            <Top img={session.img}/>

            <section className="habitsContainer">
                <section className="addHabit">
                    <h3>Meus hábitos</h3>
                    <Button stateButton={stateButton} text="+"/>
                </section>


               

                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </section>
            <Menu/>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    /* background-color: rgba(255, 0, 0, 0.5); */
    height: 100vh;

    padding-top: 70px;
    padding-bottom: 70px;

    .habitsContainer{
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 20px;
    }

    .addHabit{
        display: flex;
        justify-content: space-between;
    }

    p{
        color:rgba(102, 102, 102, 1);
    }
`;