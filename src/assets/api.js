import axios from 'axios'

export const getList = async(setState)=>{
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=67c1b764b81ffc56216aaf91692930d2&language=pt-BR&page=1")

    setState(response.data.results)

}
export const getDetails = async(id, setState)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=67c1b764b81ffc56216aaf91692930d2&language=pt-BR`)

    setState(response.data)

}
