import styled from "styled-components";


export const StyedCards = styled.section`

@mixin Flexxx{
    display: flex;
    justify-content: center;
}
    #List-Movies{
        display: flex;
    justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 30px;
        gap: 5px;
        margin-top: 10px;

            .cards{
                display: flex;
                justify-content: center;
                width: 25%;
                flex-direction: column;
                align-items: center;
                text-align: center;
                flex-wrap: wrap;
                border: solid 1px black;
                padding-top: 10px;
                cursor: pointer;

                img{
                    width: 300px;
                }
                h2{
                    width: 90%;
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size : 20px;
                }
            }
        }
`