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

export const LabelText = styled.span`
    max-width: 150px;
    width: 100%;
    display: inline-block; 
    margin-right: 10px;
`;

export const Field = styled.input`
    border: 1px solid grey; 
    border-radius: 5px;   
    padding: 7px;
    max-width: 65%;
    width: 100%;
    margin-top: 8px;
    //max-width: 350px;
`;

export const Header = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    text-transform: uppercase;
`;
