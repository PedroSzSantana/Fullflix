import axios from 'axios'

export const getList = (setState)=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=67c1b764b81ffc56216aaf91692930d2&language=pt-BR&page=1")
    .then((response)=>{
        setState(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}
export const getDetails = (id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=67c1b764b81ffc56216aaf91692930d2&language=en-US`)
    .then((response)=>{
        
    }).catch((error)=>{
        console.log(error)
    })
}
