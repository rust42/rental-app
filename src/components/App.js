import '../styles/App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { theme } from './Theme';
import { ThemeProvider } from '@emotion/react';
import NavBar from './Nav';
import Registration from './Registration';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
           <Route path='/login' element={<Login />}></Route>
           <Route path='/registration' element={<Registration />}></Route>
          <Route index element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
