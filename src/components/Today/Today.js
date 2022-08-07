import styled from 'styled-components';
import {useState, useEffect} from "react";
import {getHabitsToday} from "../../services/APIs";
import { useSession } from '../../services/Session';
import dayjs from "dayjs";

import Top from "../Generics/Top";
import Menu from "../Generics/Menu";
import Habit from "../Generics/Habit";

export default function Today(){

    // LOGIC
    const {session} = useSession();
    const [token, setToken] = useState(null);
    const [habits, setHabits] = useState(null);
    const qt_habits = habits !== null ? habits.length:null;
    let config = {};

    const listDaysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dayWeek = listDaysWeek[dayjs().day()];
    const dayMonth = dayjs().date();
    const month = dayjs().month() > 8 ? `${(dayjs().month() + 1)}`: `0${(dayjs().month() + 1)}`;

    
    // let qt_HabitsDone = 0; 
    // let percentage = 0;
    // if(habits !== null){
    //     habits.map(habit => habit.done ? qt_HabitsDone++:'');
    // }

    // if(qt_HabitsDone !== 0){
    //     percentage = Math.trunc((qt_habits / qt_HabitsDone) / 10);
    // }

    if(habits !== null){
        console.log(habits)
    }


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
            getHabitsToday(config).then( req => setHabits([...req.data])).catch(e => console.log(e));

        }
    }, [token]);

    if(token === null){return (<p>Carregando...</p>);}    

    // UI
    return (
        <Wrapper>
            <Top img={session.img}/>

            <Title>
                <h3>{dayWeek}, {dayMonth}/{month}</h3>
                {/* {qt_HabitsDone === 0 ? 
                    
                    <p>Nenhum hábito concluído ainda</p>
                    :
                } */}
            </Title>

            <HabitContainer>
                {habits !== null ? 
                    habits.map(habit => 
                        <Habit 
                            key={habit.id} 
                            id={habit.id} 
                            name={habit.name}
                            done={habit.done} 
                            currentSequence={habit.currentSequence}
                            highestSequence={habit.highestSequence}
                            config={config}
                            setHabits={setHabits}
                        />)
                    :
                    <p>Carregando...</p>
                }
            </HabitContainer>
           
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

    p{
        text-align: center;
    }    
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

const HabitContainer = styled.div`
    width: 90%; 
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;