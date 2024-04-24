import React, { useState } from 'react'
import { Modal, Form, Select, Input, message } from 'antd'; // Import Modal from antd
import axios from 'axios'
import Spinner from "./Spinner"

function AddEditTransaction(setShowAddEditTransactionModal, showAddEditTransactionModal) {

    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
        try {
            setLoading(true)
            await axios.post('/api/transactions/add-transaction', values)
            message.success('Transaction added successfully')
            setShowAddEditTransactionModal(false)
            setLoading(false)
        } catch (error) {
            message.error('Something went wrong.')
            setLoading(false)
        }
    };

    return (
        <Modal title="Add Transaction"
            visible={showAddEditTransactionModal}
            onCancel={() => setShowAddEditTransactionModal(false)}
            footer={false}
        >
            {loading && <Spinner />}
            <Form
                layout='vertical'
                className='transaction-form'
                onFinish={onFinish}>

                <Form.Item label="Amount" name='amount'>Amount:
                    <Input type='text' />
                </Form.Item>
                <Form.Item label="Type" name='type'>Type:
                    <Select>
                        <Select.Option value='income'>Income</Select.Option>
                        <Select.Option value='expense'>Expense</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Category" name='category'>Category:
                    <Select>
                        {" "}
                        <Select.Option value='salary'>Salary</Select.Option>
                        <Select.Option value='freelance'>Freelance</Select.Option>
                        <Select.Option value='food'>Food</Select.Option>
                        <Select.Option value='entertainment'>Entertainment</Select.Option>
                        <Select.Option value='education'>Education</Select.Option>
                        <Select.Option value='medical'>Medical</Select.Option>
                        <Select.Option value='tax'>Tax</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Date" name='date'>Date:
                    <Input type='date' />
                </Form.Item>

                <Form.Item label="Reference" name='reference'>Reference:
                    <Input type='text' />
                </Form.Item>

                <Form.Item label="Description" name='description'>Description:
                    <Input type='text' />
                </Form.Item>


                <div className='d-flex justify-content-end'>
                    <button className='primary' type='submit'>SAVE</button>
                </div>
            </Form>
        </Modal>
    )
}

export default AddEditTransaction
