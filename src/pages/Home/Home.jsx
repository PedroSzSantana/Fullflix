import { Cards } from "../../components/Cards/Cards";
import { Footer } from "../../components/Footer/Footer";
import { StyedHeaderHome, StyedHome, StyedMainHome } from "./HomeStyed";

const Home = ()=>{
        
    return(
        <StyedHome>

            <StyedHeaderHome>
                <h1 id="Name-Fullflix">FULLFLIX</h1>      
            </StyedHeaderHome>
                    
            <StyedMainHome>
                <h2>Filmes Populares</h2>
                
                <Cards/>

            </StyedMainHome>
            <Footer/>

        </StyedHome>

    )
}
export default Home