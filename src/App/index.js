import {useState} from "react";
import {Form} from "./Form";
import {Clock} from "./Clock";
import {currencies} from "./currencies";
import Footer from "./Footer";
import Header from "./Header";
import { Wrapper } from "./styled"

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
    <Wrapper>
        <Clock /> 
        <Header />
        <Form
        result={result}
        calculateResult={calculateResult}
        />
        <Footer />
    </Wrapper>
  );
}

export default App;