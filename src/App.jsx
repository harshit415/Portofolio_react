import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import './Components/style.css'
import Work from './Components/Work'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="work" element={<Work/>}/>

    </Route>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
