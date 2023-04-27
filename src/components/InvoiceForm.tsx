import React, { useState } from 'react';
import { uid } from 'uid';
import InvoiceModal from './InvoiceModal';
import InvoiceItem from './InvoiceItem';
const date = new Date();
const today = date.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
});

const InvoiceForm = () => {
      // const [isOpen, setIsOpen] = useState(false);
      const [tax, setTax] = useState('');
      const [storeName, setStoreName] = useState('');
      const [items, setItems] = useState([
        {
          id: uid(6),
          name: '',
          qty: 1,
          price: '1.00',
        },
      ]);

      // this prevents it from reloading with each state change
      const reviewInvoiceHandler = (event:any) => {
        event.preventDefault();
        // @ts-ignore
        setIsOpen(true);
      };

      const addItemHandler = () => {
        const id = uid(6);
        setItems((prevItem) => [
          ...prevItem,
          {
            id: id,
            name: '',
            qty: 1,
            price: '1.00',
          },
        ]);
      };

      const deleteItemHandler = (id:any) => {
        setItems((prevItem) => prevItem.filter((item) => item.id !== id));
      };

      const edtiItemHandler = (event:any) => {
        const editedItem = {
          id: event.target.id,
          name: event.target.name,
          value: event.target.value,
        };

        const newItems = items.map((items) => {
          for (const key in items) {
            if (key === editedItem.name && items.id === editedItem.id) {
        // @ts-ignore
            items[key] = editedItem.value;
            }
          }
          return items;
        });

        setItems(newItems);
      };

      const subtotal = items.reduce((previous, current) => {
        if (current.name.trim().length > 0)
        // @ts-ignore
        return previous + Number(current.price * Math.floor(current.qty));
        else return previous;
      }, 0);
        // @ts-ignore
      const taxRate = (tax * subtotal) / 100;
      
      const total = subtotal + taxRate;

  return (
      <form
        className="relative flex flex-col px-2 md:flex-row"
        onSubmit={reviewInvoiceHandler}
      >
        <div className="opacity-90 my-6 flex-1 space-y-2  rounded-md bg-white p-4 shadow-sm sm:space-y-4 md:p-6">
          <div className="flex flex-col justify-between space-y-2 border-b border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
        {/* Date */}
          <div className="flex space-x-2">
            <span className="font-bold">Current Date: </span>
            <span>{today}</span>
          </div>        
        </div>
        {/* Store */}
        <div className="text-lg">
          <label
            htmlFor="storeName"
            className="text-sm font-bold sm:text-base"
          >
            Store Name:
          </label>
          <input
            required
            className="mx-3 px-3 py-1 rounded"
            placeholder="Store name"
            type="text"
            name="storeName"
            id="storeName"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
          />
        </div>

        <table className="w-8/12 p-4 text-left">
          <thead>
            <tr className="border-b border-gray-900/10 text-sm md:text-base">
              <th>ITEM</th>
              <th>QTY</th>
              <th className="text-center">PRICE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          {/* The actual input is in Invoice Item for the main items */}
          <tbody>
            {items.map((item) => (
              <InvoiceItem
                key={item.id}
                id={item.id}
                name={item.name}
                qty={item.qty}
                price={item.price}
                onDeleteItem={deleteItemHandler}
                onEdtiItem={edtiItemHandler}
              />
            ))}
          </tbody>
        </table>
        <button
          className="rounded-md bg-gray-800 hover:bg-gray-500 px-4 py-2 text-sm text-white shadow-sm "
          type="button"
          onClick={addItemHandler}
        >
          Add Item
        </button>

        {/* Tax Input */}
        <div className="py-2">
            <div className="py-2">
              <label className="text-sm font-bold md:text-base" htmlFor="tax">
                Tax rate:
              </label>
              <div className="p-3">
                <input
                  className="w-1/4 rounded mx-3 bg-white shadow-sm"
                  type="number"
                  name="tax"
                  id="tax"
                  min="0.01"
                  step="0.01"
                  placeholder="0.0"
                  value={tax}
                  onChange={(event) => setTax(event.target.value)}
                />
                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
                  %
                </span>
              </div>
            </div>

        {/* subtotal */}
        <div className="flex flex-col items-end space-y-2 pt-6">
          <div className="flex w-3/12 justify-between md:w-1/2">
            <span className="font-bold">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        {/* Tax */}
          <div className="flex w-3/12 justify-between md:w-1/2">
            <span className="font-bold">Tax:</span>
            <span>
              ({tax || '0'}%)${taxRate.toFixed(2)}
            </span>
          </div>
        {/* Total */}
          <div className="flex w-3/12 justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
            <span className="font-bold">Total:</span>
            <span className="font-bold">
              ${total % 1 === 0 ? total : total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      
      {/* The invoice modal */} 
       <div className="basis-1/4 bg-transparent">
        <div className="sticky top-0 z-10 space-y-4 divide-y divide-gray-900/10 pb-8 md:pt-6 md:pl-4">
          <button
            className="w-full rounded-md bg-blue-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
            type="submit"
          >
            Review Invoice
          </button>
          <InvoiceModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            invoiceInfo={{
              invoiceNumber,
              storeName,
              subtotal,
              taxRate,
              total,
              
            }}
            items={items}
            onAddNextInvoice={addNextInvoiceHandler}
          />
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label className="text-sm font-bold md:text-base" htmlFor="tax">
                Tax rate:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white shadow-sm"
                  type="number"
                  name="tax"
                  id="tax"
                  min="0.01"
                  step="0.01"
                  placeholder="0.0"
                  value={tax}
                  onChange={(event) => setTax(event.target.value)}
                />
                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
                  %
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold md:text-base"
                htmlFor="discount"
              >
                Discount rate:
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white shadow-sm"
                  type="number"
                  name="discount"
                  id="discount"
                  min="0"
                  step="0.01"
                  placeholder="0.0"
                  value={discount}
                  onChange={(event) => setDiscount(event.target.value)}
                />
                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">
                  %
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div> 
    </form>
  );
};

export default InvoiceForm;