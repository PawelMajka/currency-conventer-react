import React from "react";
import currencies from "./curriencies";
import './App.css';

function App() {
  return (
    <div className="container">
        <h1 className="header">Kalkulator walut</h1>
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut </legend>
                <p>
                    <label>
                        <span className="form__labelText">Twoja kwota (PLN)*:
                        </span>
                        <input className="form__field" name="amount of many" type="number" placeholder="PLN"
                            min="1" step="0.01" required autofocus/>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText"> Oczekiwana waluta:
                        </span>
                        <select className="form__field" name="to Amount">
                            <option value="GBP"> GBP </option>
                            <option value="USD"> USD </option>
                            <option value="EUR"> EUR </option>
                            <option value="PLN"> PLN </option>
                        </select>
                    </label>
                </p>
                <p>
                    <input className="form__button" type="reset" value="Wyczyść"/>
                    <button className="form__button">Przelicz
                    </button>
                </p>
                <p>Wynik: <strong className="">N/A</strong>
                </p>
                <p>Kurs: <strong></strong></p>
                <p>*-pole wymagane</p>
            </fieldset>
        </form>
        <footer className="footer">
            &copy; Copyright 2022 - wszystkie prawa zastrzeżone!!!
        </footer>
    </div>
  );
}

export default App;
