import styled from "styled-components";
import { useState } from "react";
import {postHabit} from "../../services/APIs";



import Button from "../Button";
import Week from "./Week";

export default function NewHabit({heightForm, token}){
    // LOGIC
    const [inputHabit, setInputHabit] = useState('');
    const [stateButton, setStateButton] = useState(false);
    const [weekDay, setWeekDay] = useState([false, false, false, false, false, false, false]);
    
    

    function cancel(){

    }

    function save(){
        let listOfDays = []
        weekDay.map((day,index) => {
            if(day){
                listOfDays.push(index)
            }
        })
    
        const body = {
            name: inputHabit,
            days: listOfDays
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        postHabit(body, config).then(req => console.log(req)).catch(e => console.log(e));
    }
   
    // UI
    return (
        <Wrapper heightForm={heightForm}>
            <Content>
                <section>
                    <input type="text" placeholder="Nome do hábito" value={inputHabit} onChange={(e) => setInputHabit(e.target.value)} />
                    <Week weekDay={weekDay} setWeekDay={setWeekDay} />
                </section>

                <BoxButton>
                    <Button click={cancel} text="Cancelar"/>
                    <Button click={save} stateButton={stateButton} text="Salvar"/>
                </BoxButton>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: ${(props) => props.heightForm};
    background-color: white;
    transition: height 1s ease-in-out;

    border-radius: 5px;

    overflow: hidden;
`;

const Content = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 20px 0px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    input{
        width: 100%;
    }

    section{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

const BoxButton = styled.div`

    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;
