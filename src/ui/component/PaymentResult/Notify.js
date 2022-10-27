import './Notify.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Navbars from '../Navbars/Navbars';
import { useState } from 'react';

const LoadingIndicator = () => {
        return <div className="notify">  
              <div className="circle">
                  <Box sx={{ display: 'flex' }}>
                      <CircularProgress />
                  </Box>
              </div>
        </div>;
};


const ContainerNavbar = ({children}) => {
  return <div className="notifybody">
  <div className="navbar">
        <Navbars/>
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
