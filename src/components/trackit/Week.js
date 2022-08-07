import styled from "styled-components";
import { useState } from "react";

export default function Week({weekDay, setWeekDay, stateButton}){

    // LOGIC
    const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function clickDay(d){
        const day = parseInt(d);
        weekDay[day] = !weekDay[day];
        setWeekDay([...weekDay]);
    }

    // UI

    if(stateButton){
        return (
            <Wrapper>
                {weekDay.map((day, index) => 
                <Day key={index} 
                     color={day ? "white":"rgba(219, 219, 219, 1)"} 
                     backgroundColor={day ? "rgba(207, 207, 207, 1)":'white'} 
                     value={index} 
                     cursor="wait" >{daysWeek[index]}
                </Day>)}
            </Wrapper>
        );
    }
    else{
        return (
            <Wrapper>
                {weekDay.map((day, index) => 
                <Day key={index} 
                     color={day ? "white":"rgba(219, 219, 219, 1)"} 
                     backgroundColor={day ? "rgba(207, 207, 207, 1)":'white'} 
                     value={index} 
                     onClick={(e) => clickDay(e.target.getAttribute('value'))} 
                     cursor="pointer" >{daysWeek[index]}
                </Day>)}
            </Wrapper>
        );
    }
    
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`;

const Day = styled.div`
    height: 30px;
    width: 30px;

    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 5px;

    font-size: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: ${(props) => props.cursor};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color}
`;