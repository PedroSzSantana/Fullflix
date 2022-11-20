import styled from "styled-components";

export const StyedDetails = styled.div`
    color: white;

`
export const StyedMainDetails = styled.main`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        gap: 50px;

        img{
            width: 400px;
            height: 400px;
            margin-left: 20px;
        }
`
export const StyedMainDivInfo = styled.div`

        height: 86.5%;
        margin-left: 5%;
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