import styled from "styled-components";
import {Link} from "react-router-dom";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu(){

    let percentage = 77;
    return (
        <Wrapper>
            <Link to="/habits">Hábitos</Link>
            <section>
                {/* <Link to="/today">Hoje</Link> */}
                <CircularProgressbar value={percentage} text="Hoje" background backgroundPadding={6} styles={buildStyles({
                        // pathColor: `rgba(82, 182, 255, ${percentage / 100})`,
                        pathColor: 'white' ,
                        textColor: 'white',
                        trailColor: 'transparent',
                        backgroundColor: 'rgba(82, 182, 255, 1)',
                        pathTransitionDuration: 0.5
                    }) 
                }/>
            </section>
            <Link to="/historic">Histórico</Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    height: 70px;
    background-color: white;
    
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    section{
        /* background-color: rgba(82, 182, 255, 1); */
        height: 91px;
        width: 91px;
        border-radius: 50%;

        transform: translateY(-20px);

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        
        a{
            color: white;
        }


    }

    a{
        text-decoration: none;
        font-size: 18px;
    }

`;