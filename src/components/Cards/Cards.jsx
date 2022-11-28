import { StyedCards } from './CardStyed';
import { getList, getDetails } from '../../assets/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMovieDetails } from '../../assets/redux/counterSlice';
import { useDispatch } from 'react-redux';


export const Cards = ()=>{

    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails]  = useState()
    const dispatch = useDispatch();

    useEffect(()=>{
        getList(setMovies)
    },[]);
    useEffect(()=>{
        dispatch(getMovieDetails(movieDetails))
    },[movieDetails]);

    const onHoverDetail = async(e)=>{
        await getDetails(e.target.id, setMovieDetails);
         
    }
    return(
       <StyedCards>
                {movies.map((item)=>{            
                    return(               
                        <div 
                            className='cards'
                            id={item.id}
                            onMouseEnter={()=>{onHoverDetail()}}>
                            <img 
                            src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`} 
                            id={item.id}  alt="" />
                            
                            <div id={item.id} >
                                <h2>{item.title}</h2>
                                <h4>Nota: {item.vote_average}</h4> 
                            </div>
                        </div>
                    )
                })} 
        </StyedCards>
    )
}
