import React, {useState} from "react";
import "./App.css";
import {Form} from "./Form";
import {Clock} from "./Clock";
import {currencies} from "./currencies";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
    .find(({ short }) => short === currency)
    .rate;

    setResult({
        sourceAmount: +amount,
        targetAmount: amount / rate,
        rateExchange: rate,
        currency,
    });
  }

  return (
    <div className="app">
        <Clock /> 
        <Header />
        <Form
        result={result}
        calculateResult={calculateResult}
        />
        <Footer />
    </div>
  );
}

export default App;