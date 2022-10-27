import '../styles/App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
// import Login from '../services/HttpClient';
import Login from '../ui/component/login/Login';
import { theme } from './Theme';
import { ThemeProvider } from '@emotion/react';
import Registration from '../ui/component/Registration/Registration';
import View from './component/view/View';
import VehicleDetail from './VehicleDetail';
import BookingDetail from './component/bookingDetail/bookingDetail';
import Details from './component/Details/Details';
import Notify from './component/PaymentResult/Notify';
import Navbars from './component/Navbars/Navbars';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbars />
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/registration' element={<Registration />}></Route>
            <Route path='/view' element={<View />}></Route>
            <Route path="/vehicles/:id" element={<VehicleDetail />}></Route>
            <Route path="/booking/details/:id" element={<BookingDetail />}></Route>
            <Route path='/notify' element={<Notify/>}> </Route> 
            <Route path='/details/:id' element={<Details/>}> </Route> 

            <Route index element={<Home />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </ThemeProvider>
  );
}

export default App;
