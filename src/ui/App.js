import '../styles/App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
// import Login from '../services/HttpClient';
import Login from '../ui/component/login/Login';
import { theme } from './Theme';
import { ThemeProvider } from '@emotion/react';
import Registration from '../ui/component/Registration/Registration';
import View from './component/view/View';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/login' element={<Login />}></Route>
           <Route path='/registration' element={<Registration />}></Route>
           <Route path='/view' element={<View />}></Route>
           <Route index element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
    </ThemeProvider>
  );
}

export default App;