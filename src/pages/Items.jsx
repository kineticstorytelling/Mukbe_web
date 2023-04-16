import React from 'react';
import InvoiceForm from '../components/InvoiceForm';
import SearchFilter from '../components/SearchFilter'
import UnitConverter from '../components/UnitConverter';

const Items = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className='text-blue-800 text-5xl text-center uppercase font-bold p-5'>Bargain Items</h1>
    <div className='flex p-5'>

    <SearchFilter />
    <UnitConverter />
    </div>
    <InvoiceForm />
    </div>
        
    )
}

export default Items