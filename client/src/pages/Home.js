import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import '../resources/transactions.css'
// import { Input, Modal, Form, Select } from 'antd'
import AddEditTransaction from '../components/AddEditTransaction'

// import { Button } from "antd";
function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] = useState(false)

  return (
    // Home component representing the home page
    <DefaultLayout>
      <div className="filter d-flex justify-content-between align-items-center">
        <div>

        </div>
        <div>
          <button className="primary" onClick={() => setShowAddEditTransactionModal(true)}>
            Add New
          </button>
        </div>
      </div>

      <div className="table-analytics">

      </div>

      {showAddEditTransactionModal && (
      <AddEditTransaction 
        showAddEditTransactionModal={showAddEditTransactionModal} 
        setShowAddEditTransactionModal={setShowAddEditTransactionModal}
        />
      )}
    </DefaultLayout>
  )
}

export default Home 