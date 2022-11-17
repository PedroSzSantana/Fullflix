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
            <div id='List-Movies'>
                {movies.map((item)=>{            
                    return(               
                        <div className='cards' id={item.id} onClick={(e)=>{

                            let id = e.target.id;

                            const DetailFilme = movies.filter(element =>  element.id == id);
                            window.location='/details';
                        
                            }}>

                            <img id={item.id} src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`} alt="" />
                            <div>
                                <h2 id={item.id}> {item.title}</h2>
                                <h4 id={item.id}>Nota: {item.vote_average}</h4> 
                            </div>
                        </div>
                    )
                })} 
            </div>
        </StyedCards>
    )
}
