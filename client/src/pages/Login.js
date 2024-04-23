import { Form, message } from 'antd'
import Input from 'antd/lib/input/Input'
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import '../resources/authentication.css'
import axios from 'axios'

function Login() {
    const navigate = useNavigate()
    const onFinish = async(values) => {
        try {
            const response = await axios.post('/api/login', values)
            localStorage.setItem('Expense-tracker-user', JSON.stringify(response))
            message.success('Login successful')
            navigate('')
        } catch (error) {
            message.error('Login failed')
            
        }
    }

    return (
        <div className="login">
            <div className="row justify-content-center align-items-center w-100 h-100">

                <div className="col-md-4">
                    <Form layout='vertical' onFinish={onFinish}>
                        <h1>Expense Tracker Application Login</h1>
                        <hr />
                        <Form.Item label='Name' name='name'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input />
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to='/register'>Don't have an account? Click Here to Register.</Link>
                            <button className='primary' type='submit'>Login</button>
                        </div>
                    </Form>
                </div>

                <div className="col-md-5">
                    <div className='lottie'>
                        <dotlottie-player src="https://lottie.host/d2f99c83-b99b-4ddc-8d49-5f554a920941/el4MFtgs2L.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login
