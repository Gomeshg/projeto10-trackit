import styled from 'styled-components'
import {useState, useEffect} from "react"
import {getHabits} from "../../services/APIs";

import { useSession } from '../../services/Session';


import Top from "./Top";
import Menu from "./Menu";


export default function Today(){
    // const user = JSON.parse(localStorage.getItem('session'))
    


    const {session} = useSession();

    console.log(session)


    return (
        <Wrapper>

            <Top img={session.img}/>

            <Menu/>
        </Wrapper>
    );
}


const Wrapper = styled.div`

    height: 100vh;
    background-color: gray;
`;
