import styled from "styled-components";
import Week from "../trackit/Week";
import trash from "../../img/trash.png";
import {deleteHabit, getHabits} from "../../services/APIs";

export default function Habit({id, name, days, config, setHabits}){

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


    // UI
    return (
        <Wrapper>
            <h4>{name}</h4>
            <Week days={days} stateButton={true}/>
            <img onClick={eraseHabit} src={trash} alt="Icon trash"/>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    height: 91px;
    background-color: white;
    border-radius: 5px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 8px; 

    position: relative;

    img{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`;