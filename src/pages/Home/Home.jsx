import { Cards } from "../../components/Cards/Cards";
import { Footer } from "../../components/Footer/Footer";
import { NavHome } from "../../components/Navbar/NavHome";
import { StyedHome } from "./HomeStyed";

const Home = ()=>{
    return(
        <StyedHome>
            <header>
                <NavHome/>
                  <h1>FULLFLIX</h1>      
            </header>
                    
            <main>
                <h2>Filmes Populares</h2>
                <Cards/>
            </main>
            <Footer/> 
        </StyedHome>

    )
}
export default Home