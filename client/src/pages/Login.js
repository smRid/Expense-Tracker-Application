import { Form, message } from 'antd';
import Input from 'antd/lib/input/Input';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../resources/authentication.css';
import axios from 'axios';
import Spinner from "../components/Spinner";


function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', values);
            localStorage.setItem('expense-tracker-user', JSON.stringify({...response.data, Password:''}));
            setLoading(false)
            message.success('Login successfull.');
            navigate('/');
        } catch (error) {
            setLoading(false)
            message.error('Login failed.');
        }
    };
    useEffect(()=>{
        if(localStorage.getItem("expense-tracker-user")){
            navigate("/")
        }
    },[]);
    
    return (
        <div className="register">
            {loading && <Spinner/>}
            <div className="row justify-content-center align-items-center w-100 h-100">

                <div className="col-md-4">
                    <Form layout='vertical' onFinish={onFinish}>
                        <h1>Expense Tracker Application Login</h1>
                        <hr />
                    
                        <Form.Item label='Email' name='email'>
                            <Input type="email"/>
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input type="password"/>
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
