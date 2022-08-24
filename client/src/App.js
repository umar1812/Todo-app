import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import History from './components/History';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
