import styled from "styled-components";

export const StyedHome = styled.div`
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('https://mundoconectado.com.br/uploads/chamadas/netflix-1.jpg');
        background-size: cover;
        height: 700px;
        background-position: absolute;
  
            h1{
                color: red;
                position: absolute;
                font-weight: 700;
                font-size: 200px; 
            }  
    }
    main{
        h2{
            margin-top: 20px;
            margin-left: 5%; 
        }
    }
`