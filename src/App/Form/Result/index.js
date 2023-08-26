import "./style.css";

export const Result = ({ result }) => (
  <div className="result">
    {result !== undefined && (
      <>
      <p>Wynik:&nbsp; 
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
      </p>
      <span>Kurs:&nbsp;
         <strong>{result.rateExchange.toFixed(3)}</strong>
      </span>
      </>
    )}
  </div>
);