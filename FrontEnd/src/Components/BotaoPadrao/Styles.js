import { styled } from "styled-components"

export const StyleBotaoPadrao = styled.button`
    display: inline-block;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #000000;
    background-color: #FFD700; 
    border-radius: 25px; 
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 200px; 
    
    &:hover {
        background-color: #FFC700; 
    }
`