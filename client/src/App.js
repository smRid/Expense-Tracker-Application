import logo from './logo.svg';
import './App.css';
// import 'antd/dist/antd.css'
import { Button } from 'antd'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
// App component defining routes for different pages
function App() {
  return (

    <div className="App">
      {/* <h1>Hello World!</h1>
          <Button type="primary">Primary Button</Button> */}
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/test' element={<Test />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>

      </BrowserRouter>

    </div>

  );
}

export function ProtectedRoute(props) {
  if (localStorage.getItem('Expense-Tracker-System-By-CapTain_N-user')) {
    return props.children
  } else {
    return <Navigate to='/login' />
  }
}
export default App;