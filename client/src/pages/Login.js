import React from 'react'
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom'; 
import '../resources/authentication.css'

function Login() {

  const onFinish=(values)=>{
    console.log(values)
  }
  return (
    // Home component representing the home page
  <div className='Login'>
    <h1></h1>
    <div className="row justify-content-center align-items-center">
    <div className="col-md-5">
          <Form layout='vertical' onFinish={onFinish}>
              <h1>Expense Tracker/Login</h1>
              <hr/>
              

              <Form.Item label='Email' name='email'>

                  <Input/>

              </Form.Item>

              <Form.Item label='Password' name='password'>

                  <Input/>

              </Form.Item>

              <div className="d-flex justify-content-between align-items-center">
                <Link to='/registration'>Not Registered? Click here to Register</Link>
                <button className='primary' type='submit'>Login</button>
              </div>
          </Form>
          
        </div>
        <div className="col-md-5">
            <div className="lottie">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>                
            </div>
        </div>
        
    </div>
  </div>
  )
}

export default Login