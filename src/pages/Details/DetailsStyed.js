import styled from "styled-components";

export const StyedDetails = styled.div`
    color: white;
`
export const StyedMainDetails = styled.main`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: start;
        background-color: black;
        height: 87.6vh;
        div{
            display: flex;
            justify-content: center;
           img{
            width: 50%;
        } 
        }
        @media screen and (max-width: 1024px) {
            height: 87vh;
        }
`
export const StyedMainDivInfo = styled.div`
        display: flex;
        flex-direction: column;
        div{
            justify-content: start;
            width: 70%;
            display: flex;
            gap: 20px;
            margin-top: 20px;
            b,p{
                font-size: 100%;
            }
        }
        @media screen and (max-width: 1024px) {
            div{
                width: 80%;
                b,p{
                font-size: 90%;
                }
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