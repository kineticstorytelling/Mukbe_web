import React, { useState } from "react";
// @ts-nocheck 


function UnitConverter() {
  const [inputValue, setInputValue] = useState("");
  const [selectedFromUnit, setSelectedFromUnit] = useState("lbs");
  const [selectedToUnit, setSelectedToUnit] = useState("g");
  const [outputValue, setOutputValue] = useState("");
  const [inputPrice, setInputPrice] = useState("")
  const conversionRates = {
    oz: {
      lbs: 0.0625,
      g: 28.3495,
      kg: 0.0283495,
    //   l: 0.45
    },
    lbs: {
      oz: 16,
      g: 453.592,
      kg: 0.453592,
    },
    g: {
      lbs: 0.00220462,
      oz: 0.035274,
      kg: 0.001,
    },
    kg: {
      lbs: 2.20462,
      g: 1000,
      oz: 35.274,
    },
  };

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };
  const handleInputPrice = (event:any) => {
    setInputPrice(event.target.value);
  };

  const handleFromUnitChange = (event:any) => {
    setSelectedFromUnit(event.target.value);
  };

  const handleToUnitChange = (event:any) => {
    setSelectedToUnit(event.target.value);
  };

  const handleConvert = () => {
    // @ts-ignore
    const rate = conversionRates[selectedFromUnit][selectedToUnit];
    // @ts-ignore
    setOutputValue((inputPrice/(inputValue * rate)).toFixed(2));
  };

  return (
    <div className="p-3 px-5 border-solid border-2 rounded bg-yellow-900 opacity-70">
      <h2 className="py-3 text-3xl text-white drop-shadow-xl font-semibold">Convert Amount</h2>
      <label className="text-white">
        Cost: $ 
        <input className='mx-2 px-2 py-1 w-1/6 rounded text-black' type="number" value={inputPrice} onChange={handleInputPrice} />
      </label>
      <label className="text-white">
        Value:
        <input className='mx-2 px-1 py-1 w-1/6 rounded text-black' type="number" value={inputValue} onChange={handleInputChange} />
      </label>
   
      <label className="px-4 text-white">
        From:
        <select className='mx-2 px-3 py-1 rounded text-black' value={selectedFromUnit} onChange={handleFromUnitChange}>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </label>
      {/* <br /> */}
      <label className="px-4 md:text-white">
        To:
        <select className='mx-2 px-3 py-1 rounded text-black'value={selectedToUnit} onChange={handleToUnitChange}>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </label>
      <br />
      <button className='bg-gray-800 hover:bg-gray-200 px-3 py-1 rounded my-4 text-yellow-100 border-solid border-2  hover:text-black hover:border-white' onClick={handleConvert}>Convert</button>
      <br />
      <label className="text-white">
        Result:
        <input className='mx-3 py-1 px-1 w-1/4 rounded text-black' type="number" value={outputValue} readOnly /> Cost per Unit
      </label>
    </div>
  );
}

export default UnitConverter;