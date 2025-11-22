import React, { useState, useMemo } from "react";

export default function App() {
  const [startCurrency, setStartCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("JPY");
  const [currencyInput, setCurrencyInput] = useState(1);

  const exchangeRate = {
    USD: { EUR: 0.92, GBP: 0.79, JPY: 150, USD: 1 },
    EUR: { USD: 1.08, GBP: 0.86, JPY: 163, EUR: 1 },
    GBP: { USD: 1.27, EUR: 1.16, JPY: 190, GBP: 1 },
    JPY: { USD: 0.0066, EUR: 0.0061, GBP: 0.0052, JPY: 1 },
  };

  const convertedAmount = useMemo(() => {
    const rate = exchangeRate[startCurrency][targetCurrency];
    return currencyInput * rate;
  }, [startCurrency, targetCurrency, currencyInput]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#222",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          height: "70vh",
          maxWidth: "400px",
          backgroundColor: "navy",
          color: "white",
          padding: "40px 20px",
          gap: "10px",
        }}
      >
        <h1>Currency Converter</h1>

        <label htmlFor="currencyInput">
          Start Currency to Target Currency Conversion
        </label>
        <input
          id="currencyInput"
          type="number"
          value={currencyInput}
          onChange={(e) => setCurrencyInput(Number(e.target.value))}
        />

        <label htmlFor="startCurrency">Start Currency</label>
        <select
          id="startCurrency"
          value={startCurrency}
          onChange={(e) => setStartCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>JPY</option>
        </select>

        <label htmlFor="targetCurrency">Target Currency</label>
        <select
          id="targetCurrency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>JPY</option>
        </select>

        <p style={{ color: "orange" }}>
          Converted Amount: {convertedAmount.toFixed(2)} {targetCurrency}
        </p>
      </div>
    </div>
  );
}
