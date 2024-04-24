import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import '../resources/transactions.css';
import AddEditTransaction from '../components/AddEditTransaction';

function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] = useState(false);

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

      {showAddEditTransactionModal && (<AddEditTransaction showAddEditTransactionModal={showAddEditTransactionModal}
        setShowAddEditTransactionModal={setShowAddEditTransactionModal} />)}
    </DefaultLayout>
  );
}

export default Home;
