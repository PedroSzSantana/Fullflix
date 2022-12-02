import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDetails, getList } from '../../assets/api';
import { getMovieDetails } from '../../assets/redux/counterSlice';
import { Cardssty, StyedCards } from './CardStyed';

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
                        <Cardssty key={item.id} to='/details'id={item.id} onMouseEnter={onHoverDetail} onClick={console.log()}>
                            <img src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}id={item.id}/>
                            <div id={item.id} >
                                <h2>{item.title}</h2>
                                <h4>Nota: {item.vote_average}</h4> 
                            </div>
                        </Cardssty>
                    )
                })} 
        </StyedCards>
    )
}