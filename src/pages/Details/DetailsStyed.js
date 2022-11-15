import styled from "styled-components";

export const DetailsStyed = styled.div`

    height: 100vh;

    main{
        height: 86.3%;
        display: grid;
        grid-template-columns:repeat(2, 30% 70%);
        align-items: center;

        div{
            div{
                display: flex;
                gap: 20px;
                margin-top: 20px;

                b,p{
                    font-size: 25px;
                }
            }
        }
    }
`
export const ButtonStyed = styled.div`
        button{
        color: #ffff;
        background-color: #c62823;
        padding: 20px;
        border-radius: 30px;
        margin-top: 100px;
        font-size: 20px;
        font-weight: 700;
    }
    button:hover{
        background-color: #c62823a4;
        color: black;
    }
`