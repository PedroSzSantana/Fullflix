import { useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { getDetails } from "../../assets/api"
import { NavLink } from "react-router-dom"
import { NavDetails } from "../../components/Navbar/NavDetails"
import { ButtonStyed, DetailsStyed } from "./DetailsStyed"



const Details = ({id})=>{
    const [detail, setDetail] = useState([])

     getDetails(id, setDetail)
    console.log(detail)

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
                        <NavLink to='/'><button>Voltar para Home</button></NavLink>
                    </ButtonStyed>
                </div>
            </main>
            <Footer/>
        </DetailsStyed>
    )
}
export default Details