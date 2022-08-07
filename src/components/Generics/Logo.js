import styled from 'styled-components';
import ellipse from "../../img/Ellipse3.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import vector3 from "../../img/Vector3.png"
import vector4 from "../../img/Vector4.png"

export default function Logo(){
    return (
        <Wrapper>
            <img src={ellipse} alt="ellipse icon" />
            <img src={vector1} alt="vector icon" />
            <img src={vector2} alt="vector icon" />
            <img src={vector3} alt="vector icon" />
            <img src={vector4} alt="vector icon" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 170px;
    height: 100px;
    position: relative;
    img{
        position: absolute;
    }
    img:nth-child(1){

        width: 142px;
        height: 15px;

        bottom: 0;
        left: 16.5px;
    }
    img:nth-child(2){
        width: 18px;
        height: 22px;

        bottom: 48px;
        left: 46px;
    }
    img:nth-child(3){
        width: 18px;
        height: 42px;

        bottom: 38px;
        left: 69px;
    }
    img:nth-child(4){
        width: 18px;
        height: 63px;

        bottom: 28px;
        left: 93px;
    }
    img:nth-child(5){

        width: 154px;
        height: 48px;

        bottom: 5px;
        left: 5px;
    }
`;