import styled from "styled-components";
import {useState} from "react";
import Week from "../Habits/Week";
import trash from "../../img/trash.png";
import check from "../../img/check.png";
import {deleteHabit, getHabits, getHabitsToday, checkHabit, uncheckHabit} from "../../services/APIs";

export default function Habit({id, name, days, done, currentSequence, highestSequence, config, setHabits}){
    
    // LOGIC
    function eraseHabit(){
        let answer = window.confirm("Você quer realmente apagar este hábito?");
        if(answer){
            deleteHabit(id, config).then(() => {
                getHabits(config).then((req) => {
                    
                    setHabits([...req.data]);

                }).catch(e => console.log(e));
            }).catch(e => console.log(e));
        }
    }

    const [habitDone, setHabitDone] = useState(done);
    const body = {};

    function checkHab(){        
        
        checkHabit(id, config, body).then(() => {

            setHabitDone(!habitDone);
            getHabitsToday(config).then((req) => {
                
                setHabits([...req.data]);

            }).catch(e => console.log(e));
        }).catch(e => console.log(e));
    }

    function uncheckHab(){
        uncheckHabit(id, config, body).then(() => {
            
            setHabitDone(!habitDone);
            getHabitsToday(config).then((req) => {
                
                setHabits([...req.data]);

            }).catch(e => console.log(e));
        }).catch(e => console.log(e));
    }

    // UI
    if(days){
        return (
            <Wrapper1>
                <h4>{name}</h4>
                <Week days={days} stateButton={true}/>
                <Trash onClick={eraseHabit} src={trash} alt="Icon trash"/>
            </Wrapper1>
        );
    }

    else{
        
        return (
            <Wrapper2>
                <h4>{name}</h4>
                <TextBox>
                    <p>Sequência atual: {currentSequence} dias</p>
                    <p>Seu recorde: {highestSequence} dias</p>
                </TextBox>

                <CheckBox 
                    onClick={habitDone ?  uncheckHab:checkHab} 
                    backgroundColor={habitDone ? "rgba(143, 197, 73, 1)":"rgba(235, 235, 235, 1)"}
                    border={habitDone ? 'transparent':'rgba(231, 231, 231, 1)'}
                    >
                    <Check src={check} alt="Icon Check"/>
                </CheckBox>
            </Wrapper2>
        );
    }
}

const Wrapper1 = styled.div`
    height: 94px;
    background-color: white;
    border-radius: 5px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 8px; 

    position: relative;
`;

const Trash = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;


const Wrapper2 = styled.div`
    height: 94px;
    background-color: white;
    border-radius: 5px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 5px; 

    position: relative;

`;

const CheckBox = styled.div`
   height: 69px;
   width: 69px;

   background-color: ${(props) => props.backgroundColor};
   border: 1px solid ${(props) => props.border};
   border-radius: 5px;

   position: absolute;
   top: 12.5px;
   right: 12.5px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Check = styled.img`
    height: 28px;
    width: 35px;
    
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p{
        font-size: 13px;
        line-height: 20px;
    }
`;