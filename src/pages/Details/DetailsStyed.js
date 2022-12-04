import styled from "styled-components";

export const StyedDetails = styled.div`
    color: white;
    height: 100vh;
    background-color: black;
`
export const StyedMainDetails = styled.main`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: start;
        
        height: 86.7vh;
        div{
            display: flex;
            justify-content: center;
           img{
            width: 50%;
        } 
        }
        @media screen and (max-width: 615px) {
            display: flex;
            flex-direction: column;
            div{
                margin-top: 10px;
                img{ 
                    width: 40%;
                }
            }
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
                width: 90%;
                b,p{
                font-size: 90%;

                }
            }
        }
        @media screen and (max-width: 615px) {
            margin-left: 10px;
            div{
                gap: 10px;
                flex-direction: column;
                b,p{
                font-size: 80%;

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
    @media screen and (max-width: 615px){
        a{
            position: absolute;
            left: 200px;
            bottom: 80px;
            padding: 10px;
            font-size: 10px;
        }
    }
    @media screen and (max-width: 375px){
        a{
            left: 60%;
            bottom: 10%;
        }
    }
`