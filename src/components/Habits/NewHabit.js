import styled from "styled-components";
import { useState } from "react";
import {postHabit, getHabits} from "../../services/APIs";
import Button from "../Generics/Button";
import Input from "../Generics/Input";
import Week from "./Week";

export default function NewHabit({heightForm, setHeightForm, token, setHabits}){
    // LOGIC
    const [inputHabit, setInputHabit] = useState('');
    const [stateButton, setStateButton] = useState(false);
    const [weekDay, setWeekDay] = useState([false, false, false, false, false, false, false]);
    
    
    function cancel(){
        setHeightForm(0);
    }

    function save(){

        setStateButton(true);


        let listOfDays = [];
        weekDay.map((day,index) => {
            if(day){
                listOfDays.push(index);
            }
        })
    
        const body = {
            name: inputHabit,
            days: listOfDays
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        if(listOfDays.length === 0){
            alert("Escolha pelo menos um dia!");
            setStateButton(false);
        }

        else{
            postHabit(body, config).then(() => {
                setStateButton(false);
                setInputHabit(''); 
                setWeekDay([false, false, false, false, false, false, false]);
                setHeightForm(0);

                getHabits(config).then((req) => {
                    setHabits([...req.data]);
                }).catch(e => console.log(e));
            }).catch(e => {
                alert('Não foi possível adicionar novo hábito!');
                console.log(e);
                setStateButton(false);
            });
        }
    }
   
    // UI
    return (
        <Wrapper heightForm={heightForm}>
            <Content>
                <section>
                    <Input type="text" placeholder="Nome do hábito" value={inputHabit} setValue={setInputHabit} isRequired={true} stateButton={stateButton}/>
                    <Week weekDay={weekDay} setWeekDay={setWeekDay} stateButton={stateButton} />
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