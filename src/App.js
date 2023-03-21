
import Register from './components/funcform/Register';
import Login from './components/funcform/Login'
import { BrowserRouter , Route ,Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
        <Route path = '/' element  = {<Register/>}/>
        <Route path = '/login' element  = {<Login/>}/>
        </>
        </Routes>
  </BrowserRouter>
    
  );
}

export default App;
