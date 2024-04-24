import React, { useState } from 'react';
import { Modal,Form, Select,Input } from 'antd'; // Import Modal from antd
import DefaultLayout from '../components/DefaultLayout';
import '../resources/transactions.css';

function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] = useState(false);
  const onFinish=(values)=>{
    console.log(values)
  }
  return ( 
    <DefaultLayout>
      <div className='filter d-flex justify-content-between align-items-center'>
        <div></div>
        <div>
          <button className='primary' onClick={() => setShowAddEditTransactionModal(true)}>ADD NEW</button>
        </div>
      </div>
      
      <div className="table-analytics">
        {/* Your table content goes here */}
      </div>
      
      <Modal title="Add Transaction" 
        visible={showAddEditTransactionModal} 
        onCancel={() => setShowAddEditTransactionModal(false)}
        footer={false}
      >
        <Form layout='vertical' className='transaction-form' onFinish={onFinish}>  

          <Form.Item label= "Amount" name= 'amount' > Amount :<br></br>
              <Input type='text'/>
          </Form.Item>
          <Form.Item label= "Type" name= 'type' > Type :<br></br>
          <Select>
          <Select.Option value='income'>Income</Select.Option>
          <Select.Option value='expense'>Expense</Select.Option>
          </Select>
          </Form.Item>

          <Form.Item label= "Category" name= 'category' >Category :<br></br>
          <Select>
            {""}
          <Select.Option value='salary'>Salary</Select.Option>
          <Select.Option value='freelance'>Freelance</Select.Option>
          <Select.Option value='food'>Food</Select.Option>
          <Select.Option value='entertainment'>Entertainment</Select.Option>
          <Select.Option value='education'>Education</Select.Option>
          <Select.Option value='medical'>Medical</Select.Option>
          <Select.Option value='tax'>Tax</Select.Option>
          </Select>
          <Form.Item label= "Date" name= 'date' >
              <Input type='date'/>
          </Form.Item>

          <Form.Item label= "Reference" name= 'reference' > Reference :<br></br>
              <Input type='text'/>
          </Form.Item>

          <Form.Item label= "Description" name= 'description' > Description :<br></br>
              <Input type='text'/>
          </Form.Item>

          </Form.Item>
            <div className='d-flex justify-content-end'> 
              <button className='primary' type='submit' >SAVE</button>
            </div>
        </Form>
      </Modal>
    </DefaultLayout>
  );
}

export default Home;
