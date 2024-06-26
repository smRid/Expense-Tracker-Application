import { Form, message } from 'antd'
import Input from 'antd/lib/input/Input'
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import '../resources/authentication.css'
import axios from 'axios'
import Spinner from "../components/Spinner"

function Register() {
    const [loading, setLoading] = useState(false)
    const onFinish = async (values) => {
        try {
            setLoading(true) // Set loading state to true

            await axios.post('/api/users/register', values)
            message.success('Registration is successful')
            setLoading(false) // Set loading state to false
        } catch (error) {
            message.error('Something went wrong')
            setLoading(false) // Set loading state to false
        }
    }

    const navigate = useNavigate(true)
    useEffect(()=>{
        if(localStorage.getItem('Expense-Tracker-System-By-CapTain_N-user')){
            navigate("/")
        }
    }, []);

    return (
        <div className="register">
            {loading && <Spinner />}
            <div className="row justify-content-center align-items-center w-100 h-100">

                <div className="col-md-5">
                    <div className='lottie'>
                        <dotlottie-player src="https://lottie.host/d2f99c83-b99b-4ddc-8d49-5f554a920941/el4MFtgs2L.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                    </div>
                </div>

                <div className="col-md-4">
                    <Form layout='vertical' onFinish={onFinish}>
                        <h1>Expense Tracker Register</h1>
                        <hr />
                        <Form.Item label='Name' name='name'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input type="password" />
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to='/login'>Already Registered? Click Here to Login.</Link>
                            <button className='primary' type='submit'>REGISTER</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register
