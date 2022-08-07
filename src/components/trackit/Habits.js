import styled from "styled-components";
import { useSession } from '../../services/Session';
import {getHabits, setHabit, deleteHabit} from '../../services/APIs';
import {useState, useEffect} from 'react';

import Button from '../Button';
import Top from "./Top";
import Menu from "./Menu";
import NewHabit from "./NewHabit";

export default function Habits(){
    // LOGIC
    const {session} = useSession();
    const [stateButton, setStateButton] = useState(false);
    const [heightForm, setHeightForm] = useState(0);
    const [habits, setHabits] = useState([]);
    const [token, setToken] = useState(null);
    let config = {}

    console.log(habits)
    
    if(session.token){
        
        if(token === null){
            setToken(session.token);
        }

        config = {
            headers: {
            Authorization: `Bearer ${session.token}`  
            } 
        }
    }
        
    useEffect(() => {
        
        if(token !== null){
            // getHabits(config).then( req => setHabits([...req.data]));
            getHabits(config).then( req => console.log(req.data)).catch(e => console.log(e))
        }
    }, [token]);
    


   

    function openForm(){
        if(heightForm === 0){
            setHeightForm(180);
        }
        else{
            setHeightForm(0);
        }
    }

    if(token === null){return (<h1>Carregando...</h1>);}    
    // UI
    return (
        <Wrapper>
            <Top img={session.img}/>

            <Content>
                    <AddHabit>
                        <h3>Meus hábitos</h3>
                        <Button click={openForm} stateButton={stateButton} text="+"/>
                    </AddHabit>


                    <NewHabit heightForm={heightForm} token={token}/> 

                
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>                
            </Content>
            
            <Menu/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    min-height:100vh;
    max-height: min-content;

    padding-top: 90px;
    padding-bottom: 100px;

    p{
        color:rgba(102, 102, 102, 1);
    }
`;

const Content = styled.div`
    width: 90%; 
    margin: 0 auto;

    display:flex;
    flex-direction: column;
    gap: 20px;
`;

const AddHabit = styled.div`
    display: flex;
    justify-content: space-between;
`;