import { form } from 'antd'
import Input from 'antd/lib/input/Input'
import React from 'react'

function Register() {
  return (
    <div className='register'>
      <div className='row'>
        <div className='col-md-5'></div>
        <div className='col-md-5'>
          <Form>
            <Form.item label='Name' name='name'>
              <Input></Input>
            </Form.item>

            <Form.item label='Email' name='email'>
              <Input></Input>
            </Form.item>

            <Form.item label='Password' name='password'>
              <Input></Input>
            </Form.item>


          </Form>
        </div>
      </div>
      
    </div>
  )
}

export default Register
