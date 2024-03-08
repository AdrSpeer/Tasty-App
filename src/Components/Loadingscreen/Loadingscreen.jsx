import "./Loadingscreen.css";
import { useContext, useEffect } from "react";
import { LoadingContext } from './../../Context/Context';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Loadingscreen = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    }, []);
  
    return (
      <section className="loading-bg">
        <p>TASTY</p>
        <div className="loader"></div>
      </section>
    );
  };
 
export default Loadingscreen;