import { Form, Input } from 'antd';
import { Link } from 'react-router-dom'; 
import DefaultLayout from '../components/DefaultLayout'
import React from 'react'

function Registration() {
  return (
    // Home component representing the home page
  <div className='register'>
    <div className="row">
        <div className="col-md-5">

        </div>
        <div className="col-md-5">
          <Form layout='vertical'>
              <Form.Item label='Name' name='name'>

                  <Input/>

              </Form.Item>

              <Form.Item label='Email' name='email'>

                  <Input/>

              </Form.Item>

              <Form.Item label='Password' name='password'>

                  <Input/>

              </Form.Item>

              <div className="d-flex justify-content-between align-items-center">
                <Link to='/login'>Already Registered? Click here to Login</Link>
                <button className='primary'>Register</button>
              </div>
          </Form>
          
        </div>
    </div>
  </div>
  )
}

export default Registration