import styled from "styled-components";

export default function Top({img}){

    console.log(img)
    return (
        <Wrapper>
            <h2>TrackIt</h2>
            <img src={img} alt="dsds" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 70px;
    padding: 10px;
    background-color: rgba(18, 107, 165, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        background-size: cover;
        border-radius: 50%;
        height: 51px;
        width: 51px;
    }
`;