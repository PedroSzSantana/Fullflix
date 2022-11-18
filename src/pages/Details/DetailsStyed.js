import styled from "styled-components";

export const StyedDetails = styled.div`
    overflow: hidden;
    color: white;
`
export const ButtonStyed = styled.div`
    a{
    color: #ffff;
    background-color: #c62823;
    padding: 20px;
    border-radius: 30px;
    margin-top: 100px;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    }
    a:hover{
        background-color: #c62823a4;
        color: black;
    }
`
export const StyedMainDetails = styled.main`

        height: 86.2vh;
        display: grid;
        grid-template-columns:repeat(2, 40% 70%);
        align-items: center;
        background-color: black;

        img{
            width: 90%;
            height: 400px;
            margin-left: 20px;
        }
        div{
            div{
                width: 70%;
                display: flex;
                gap: 20px;
                margin-top: 20px;

                b,p{
                    font-size: 25px;
                }
            }
        }
`