import React, { useState } from "react";

function UnitConverter() {
  const [inputValue, setInputValue] = useState("");
  const [selectedFromUnit, setSelectedFromUnit] = useState("lbs");
  const [selectedToUnit, setSelectedToUnit] = useState("g");
  const [outputValue, setOutputValue] = useState("");

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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setSelectedFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setSelectedToUnit(event.target.value);
  };

  const handleConvert = () => {
    const rate = conversionRates[selectedFromUnit][selectedToUnit];
    setOutputValue(inputValue * rate);
  };

  return (
    <div className="p-3 px-5">
      <h2 className="py-3 text-3xl text-blue-900">Convert Amount</h2>
      <label className="">
        Value:
        <input className='mx-2 px-1 py-1 w-1/6 rounded' type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      {/* <br /> */}
      <label className="px-4">
        From:
        <select className='mx-2 px-3 py-1 rounded' value={selectedFromUnit} onChange={handleFromUnitChange}>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </label>
      {/* <br /> */}
      <label className="px-4">
        To:
        <select className='mx-2 px-3 py-1 rounded'value={selectedToUnit} onChange={handleToUnitChange}>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </label>
      <br />
      <button onClick={handleConvert}>Convert</button>
      <br />
      <label>
        Result:
        <input type="number" value={outputValue} readOnly />
      </label>
    </div>
  );
}

export default UnitConverter;