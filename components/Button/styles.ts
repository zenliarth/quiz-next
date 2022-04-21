import styled from 'styled-components';

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    max-width: 200px;
    min-width: 150px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    font-weight: 400;
    font-size: 1.2rem;
    border: 1px solid #9885f0;
    padding: 10px 35px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;
