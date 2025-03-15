import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import './Components/style.css'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>

    </Route>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
