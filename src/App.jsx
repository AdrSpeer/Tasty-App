import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage/Landingpage';
import Search from './Pages/Search/Search';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';
import "@fontsource-variable/inter";
import { LoadingContext } from "./Context/Context";
import { useState } from 'react';
import Loadingscreen from './Components/Loadingscreen/Loadingscreen';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
        </BrowserRouter>
        ) : (
          <Loadingscreen/>
        )}
      </LoadingContext.Provider>
    </>
  )
}

export default App
