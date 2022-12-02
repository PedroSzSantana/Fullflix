import styled from "styled-components";

export const StyedDetails = styled.div`
    color: white;
`
export const StyedMainDetails = styled.main`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        background-color: black;
        height: 100vh;

        img{
            width: 100%;
            height: 70%;
            margin-left: 20px;
            } 

        
`
export const StyedMainDivInfo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        div{
            width: 70%;
            display: flex;
            gap: 20px;
            margin-top: 20px;
            b,p{
                font-size: 100%;
            }
        }
`
export const ButtonStyed = styled.div`
    a{
    color: #ffff;
    background-color: #c62823;
    padding: 20px;
    border-radius: 30px;
    margin-top: 5%;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    }
    a:hover{
        background-color: #c62823a4;
        color: black;
    }
`