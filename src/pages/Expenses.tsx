import React from 'react';
import InvoiceForm from '../components/InvoiceForm';
import SearchFilter from '../components/SearchFilter'
import UnitConverter from '../components/UnitConverter';
import Big from '../assets/images/Jehlyo-big.png'
import '../styles.css'

const Expenses = () => {
  return (
    <div className="min-h-screen bg-cover bg-gray-100" style={{backgroundImage: `url(${ Big })`}}>
      <h1 className='text-gray-800 drop-shadow-lg text-5xl text-center uppercase font-bold p-5'>Mukbe Items</h1>
    <div className='flex p-5'>

    <SearchFilter />
    <UnitConverter />
    </div>
    <InvoiceForm />
    </div>
        
    )
}

export default Expenses