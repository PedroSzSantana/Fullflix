import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "../pages/Details/Details"
import Home from "../pages/Home/Home"

export const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/details' element={<Details/>}/>
                <Route path='*' element={<div><h1>Pagina não encontrada</h1></div>}/>
            </Routes>
        </BrowserRouter>
    )
}