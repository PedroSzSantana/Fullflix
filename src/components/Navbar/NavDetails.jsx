import { NavLink } from "react-router-dom"
import { StyedNavDetails } from "./NavStyed"



export const NavDetails = ({title})=>{
    return(
        <StyedNavDetails>
            <nav>
                <h1>{title}</h1>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to=''>Favoritos</NavLink></li>
                </ul>
            </nav>
        </StyedNavDetails>
    )
}