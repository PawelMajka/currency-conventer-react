import { useState, useEffect } from "react";
import { Wrapper } from "./styled";


const formatDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
});

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {  //setTimeout
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Wrapper>
            Dzisiaj jest {" "}
            {formatDate(date)}
        </Wrapper>
    );
};

export default Clock;