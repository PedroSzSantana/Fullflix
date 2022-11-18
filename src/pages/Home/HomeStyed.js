import styled from "styled-components";

export const StyedHome = styled.div`
    background-color: black;
`
export const StyedHeaderHome = styled.header`

        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('https://mundoconectado.com.br/uploads/chamadas/netflix-1.jpg');
        background-size: cover;
        height: 100vh;
        width: 100%;
        background-position: absolute;
        
            #Name-Fullflix{
                color: red;
                position: absolute;
                font-weight: 700;
                font-size: 200px; 
            }  
    
    @media screen and (max-width: 450px) {

        #Name-Fullflix{
            color: red;
            position: absolute;
            font-weight: 700;
            font-size: 65px; 
        }
        }
    
    @media screen and (width: 768px){
  
        #Name-Fullflix{
            color: red;
            position: absolute;
            font-weight: 700;
            font-size: 150px; 
        }
    }
`
export const StyedMainHome = styled.main`

    h2{
        margin-top: 20px;
        margin-left: 5%; 
    }  
`