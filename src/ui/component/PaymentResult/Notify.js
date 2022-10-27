import './Notify.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Navbars from '../Navbars/Navbars';
import { useState } from 'react';
import LoadingIndicator from '../common/LoadingIndicator';



const ContainerNavbar = ({children}) => {
  return <div className="notifybody">
  <div className="navbar">
        {children}
  </div>
  </div>;
};


const Notify = () => {

  const [isAnimating, setAnimating] = useState(true);
  

  useState(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 5000)
  }, [isAnimating]);


  if (isAnimating) {
    return <LoadingIndicator />;
  }

  return <ContainerNavbar>
      <h1> Hey I am a child</h1>
    </ContainerNavbar>
  
}

export default Notify
