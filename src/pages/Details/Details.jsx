// import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { NavDetails } from "../../components/Navbar/NavDetails"
import { ButtonStyed, StyedDetails, StyedMainDetails, StyedMainDivInfo } from "./DetailsStyed"

const Details = ()=>{
    
    const state = useSelector(state => state.page.details)
    return(
        <StyedDetails>
            <NavDetails title={state.title}/>
            <StyedMainDetails>
                <div>
                    <img src={`https://www.themoviedb.org/t/p/original/${state.poster_path}`} alt="" />
                </div> 
                <StyedMainDivInfo>
                    <div>
                        <b>Titulo:</b>
                        <p>{state.title}</p> 
                    </div>

                    <div>
                        <b>Sinopse: </b> 
                        <p>{state.overview}</p>
                    </div>
                    <div>
                        <b>Lançamento: </b>
                        <p>{state.release_date}</p>
                    </div>
                    <div>
                        <b>Nota: </b>
                        <p>{state.vote_average}</p>
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