import styled from "styled-components";

export const StyedCards = styled.section`

        color: #ffff;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 30px;
        gap: 10px;
        margin-top: 10px;
        width: 100%;
            .cards {
                display: flex;
                justify-content: center;
                flex-direction: column;
                width: 320px;
                align-items: center;
                text-align: center;
                border: solid 1px #ffff;
                padding-top: 10px;
                cursor: pointer;
                padding-bottom: 10px;

                img{
                    width: 80%;
                }
                h2{
                    width: 90%;
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size : 20px;
                }
            }
            .cards:hover{
                border: solid 1px red;
            }
`