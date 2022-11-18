import { StyedCards } from './CardStyed';
import { getList } from '../../assets/api';
import { useState } from 'react';
import { useEffect } from 'react';

export const Cards = ()=>{

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        getList(setMovies)
    },[]);

    return(
       <StyedCards>
                {movies.map((item)=>{            
                    return(               
                        <div className='cards' id={item.id} onClick={()=>{window.location='/details';}}>
                            <img src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`} alt="" />
                            <div>
                                <h2>{item.title}</h2>
                                <h4>Nota: {item.vote_average}</h4> 
                            </div>
                        </div>
                    )
                })} 
        </StyedCards>
    )
}
