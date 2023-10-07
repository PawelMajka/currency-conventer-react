import styled from "styled-components";

export const Button = styled.button`
    width: 100%; 
    border: 2px solid black; 
    background-color: teal; 
    color: white;
    border-radius: 5px; 
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        //background-color: hsl(180, 100%, 35%); 
        filter: brightness(130%)
    }

    &:active {
        //background-color: hsl(180, 100%, 45%); 
        filter: brightness(160%)
        //border: none; 

    }
`;
