import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {Button} from 'antd'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Test from './pages/Test';
import Registration from './pages/Registration';
import Login from './pages/Login';

// App component defining routes for different pages
function App() {
  return (

    <div className="App">
          <BrowserRouter>

                <Routes>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/test' element={<Test/>}/>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/login' element={<Login/>}/>

                </Routes>

          </BrowserRouter>

    </div>

  );
}

export default App;