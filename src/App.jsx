import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage/Landingpage';
import Search from './Pages/Search/Search';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';
import "@fontsource-variable/inter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
