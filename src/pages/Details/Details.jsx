import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { NavLink } from "react-router-dom"
import { NavDetails } from "../../components/Navbar/NavDetails"
import { ButtonStyed, DetailsStyed } from "./DetailsStyed"
import { getDetails } from "../../assets/api"



const Details = ({id})=>{

    const [details, setDetails] = useState([])
    useEffect(()=>{

    },[])
    return(
        <DetailsStyed>
            <NavDetails title={'Titulo'}/>
            <main>
                <p>Imagem filme</p>
                <div>
                    <div>
                        <b>Titulo:</b>
                        <p>{}</p> 
                    </div>
                    <div>
                        <b>Sinopse: </b> 
                        <p>{}</p>
                    </div>
                    <div>
                        <b>Lançamento: </b>
                        <p>{}</p>
                    </div>
                    <div>
                        <b>Nota: </b>
                        <p>{}</p>
                    </div>
                    <ButtonStyed>
                        <NavLink to='/'>Voltar para Home</NavLink>
                    </ButtonStyed>
                </div>
            </main>
            <Footer/>
        </DetailsStyed>
    )
}
export default Details