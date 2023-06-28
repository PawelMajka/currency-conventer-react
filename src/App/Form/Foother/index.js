import React from "react";
import "./style.css";

export const Foother = ({ foother }) => (
    <p className="foother__info">
      {foother !== undefined && (
        <>
        <p>Kurs: 
            <strong>
              {result.priceAmount.toFixed(3)}&nbsp;{foother.currency}
            </strong>
        </p>
        <p>*-pole wymagane</p>
        <p 
            className="foother__info">
            Kursy pochodzą ze strony nbp.pl
        </p>
        </>
      )}
    </p>
  );

