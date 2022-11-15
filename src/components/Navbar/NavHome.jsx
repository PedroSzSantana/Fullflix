import { StyedNavHome } from "./NavStyed"
import { NavLink } from "react-router-dom";


export const NavHome = ()=>{
    return(
        <StyedNavHome>
            <nav>
                <ul>
                    <li><NavLink to='/'>HOME</NavLink></li>
                </ul> 
            </nav> 
        </StyedNavHome>
    )
}