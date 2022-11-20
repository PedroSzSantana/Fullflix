// import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { NavLink } from "react-router-dom"
import { NavDetails } from "../../components/Navbar/NavDetails"
import { ButtonStyed, StyedDetails, StyedMainDetails, StyedMainDivInfo } from "./DetailsStyed"
// import { getDetails } from "../../assets/api"

const Details = ()=>{

    // const [details, setDetails] = useState([])
    // useEffect(()=>{

    // },[])
    return(
        <StyedDetails>
            <NavDetails title={'Titulo'}/>
            <StyedMainDetails>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGH_FdSIf01kpjCJSolrXeh4HO2veIaXvjQ&usqp=CAU" alt="" />
                </div>
                <StyedMainDivInfo>
                    <div>
                        <b>Titulo:</b>
                        <p>{'Titulo'}</p> 
                    </div>

                    <div>
                        <b>Sinopse: </b> 
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis, dolores animi totam, eum maiores voluptates iusto nulla neque reiciendis facere error ea pariatur maxime! Quisquam dolorem dolorum est saepe!l'}</p>
                    </div>
                    <div>
                        <b>Lançamento: </b>
                        <p>{'02/10/2003'}</p>
                    </div>
                    <div>
                        <b>Nota: </b>
                        <p>{'7.7'}</p>
                    </div>
                    <ButtonStyed>
                        <NavLink to='/'>Voltar para Home</NavLink>
                    </ButtonStyed>
                </StyedMainDivInfo>
            </StyedMainDetails>
            <Footer/> 
        </StyedDetails>
    )
}
export default Details