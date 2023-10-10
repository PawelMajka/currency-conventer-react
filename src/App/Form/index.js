
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";
import { Button, LabelText, Field, Header } from "./styled"

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <label>
          <LabelText>Kwota w zł*:</LabelText>
          <Field
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę"
            type="number"
            min="0"
            step="0.1"
            max="1000000"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <LabelText>Waluta:</LabelText>
          <select
            className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p>
        <Button>Przelicz!</Button>
      </p>
      <Result result={result} />
    </form>
  );
};