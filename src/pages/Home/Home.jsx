import { Cards } from "../../components/Cards/Cards";
import { Footer } from "../../components/Footer/Footer";
import { StyedHeaderHome, StyedHome, StyedMainHome } from "./HomeStyed";

const Home = ()=>{
        
    return(
        <StyedHome>

            <StyedHeaderHome/>  

            <StyedMainHome>
                <div>
                   <h2>Filmes Populares</h2> 
                </div>
                
                <Cards/>

            </StyedMainHome>
            <Footer/>

        </StyedHome>

    )
}
export default Home