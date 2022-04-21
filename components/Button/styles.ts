import styled from 'styled-components';

export const Btn = styled.button`
    background-color: #9885f0;
    border-radius: 8px;
    font-weight: 300;
    font-size: 1.2rem;
    border: none;
    padding: 10px 25px;
    margin-top: 30px;
    
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #8f7ce3;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    }
`;
