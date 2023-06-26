import React from "react";
import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result !== undefined && (
      <>
      <p>Wynik: 
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
      </p>
      <p>Kurs: <strong class="js-exchangeRate"></strong></p>
      <p>*-pole wymagane</p>
      </>
    )}
  </p>
);