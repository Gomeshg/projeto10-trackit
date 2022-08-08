import styled from "styled-components";
import { useSession } from '../../services/Session';

export default function Percentage({habits}){

    const {setPercentage} = useSession();
    const qt_habits = habits !== null ? habits.length:null;
    let qt_HabitsDone = 0; 
    let percentage = 0;

    if(habits !== null){
        habits.forEach(habit => habit.done ? qt_HabitsDone++:'');
    }
    if(qt_habits !== null){
        percentage = Math.trunc(((qt_HabitsDone / qt_habits ) * 100));
        setPercentage(percentage);
    }
  
    {qt_HabitsDone === 0 ? 
        <p>Nenhum hábito concluído ainda</p>
        :
        <p>{percentage}% dos hábitos concluídos</p>
    }

    if(qt_HabitsDone === 0){
        return(
            <Wrapper color={"rgba(102, 102, 102, 1)"}>Nenhum hábito concluído ainda</Wrapper>
        );
    }
    else{
        return(
            <Wrapper color={"rgba(143, 197, 73, 1)"}>{percentage}% dos hábitos concluídos</Wrapper>
        );
    }
}

const Wrapper = styled.div`
    font-size: 18px;
    color: ${(props) => props.color};
`;