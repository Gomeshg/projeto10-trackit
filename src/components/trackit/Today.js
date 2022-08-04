import styled from 'styled-components'
import {useState, useEffect} from "react"
import {getHabits} from "../../services/APIs";

import Top from "./Top";
import Menu from "./Menu";


export default function Today(){
    const user = JSON.parse(localStorage.getItem('session'))
    console.log(user)

    const [teste, setTest] = useState('');

    return (
        <Wrapper>

            <Top img={user.img}/>

            <Menu/>
        </Wrapper>
    );
}


const Wrapper = styled.div`

    height: 100vh;
    background-color: gray;
`;
