import styled from "styled-components";


export const StyedCards = styled.section`
    #grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
        gap: 10px;
        margin-left: 5%;
        margin-right: 5%;

            .cards{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex-wrap: wrap;
                margin-bottom: 50px;
                margin-top: 30px;
                border: solid 1px black;
                padding-top: 10px;
                cursor: pointer;
                
                img{
                    width: 300px;
                }
                h2{
                    width: 100%;
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size : 20px;
                }
            }
        }
`