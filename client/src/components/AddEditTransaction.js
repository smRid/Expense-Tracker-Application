import React, { useState } from 'react'
import { Input, Modal, Form, Select, message } from 'antd'
import axios from 'axios'
import Spinner from './Spinner'

function AddEditTransaction({showAddEditTransactionModal, setShowAddEditTransactionModal}) {

    const [loading, setLoading] = useState(false)
    const onFinish = async (values) => {
        try {
            setLoading(true) // Set loading state to true

            await axios.post('/api/transactions/add-transaction', values)
            message.success('Transaction Added Successfully')
            setLoading(false) // Set loading state to false
        } catch (error) {
            message.error('Something went wrong')
            setLoading(false) // Set loading state to false
        }
    }

    return (
        <Modal 
            title="ADD Transaction"
            visible={showAddEditTransactionModal}
            onCancel={() => setShowAddEditTransactionModal(false)}
            footer={false}
        >

            {loading && <Spinner />}
            <Form layout='vertical' className='transaction-form' onFinish={onFinish}>

                <Form.Item label='Amount' name='amount'>
                    <Input type='text' />
                </Form.Item>

                <Form.Item label='Type' name='type'>
                    <Select>
                        <Select.Option value='income'>Income</Select.Option>
                        <Select.Option value='expense'>Expense</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label='Category' name='category'>
                    <Select>
                        <Select.Option value='salary'>Salary</Select.Option>
                        <Select.Option value='freelancing'>Freelancing</Select.Option>
                        <Select.Option value='food'>Food</Select.Option>
                        <Select.Option value='entertainment'>Entertainment</Select.Option>
                        <Select.Option value='education'>Education</Select.Option>
                        <Select.Option value='medical'>Medical</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label='Date' name='date'>
                    <Input type='date' />
                </Form.Item>

                <Form.Item label='Reference' name='reference'>
                    <Input type='text' />
                </Form.Item>

                <Form.Item label='Description' name='description'>
                    <Input type='text' />
                </Form.Item>

                <div className="d-flex justify-content-end">
                    <button className="primary" type='submit'>Save</button>
                </div>
            </Form>

        </Modal>
    )
}

export default AddEditTransaction
