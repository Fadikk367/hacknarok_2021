import styled from 'styled-components';

export const CustomHeader = styled.header`
    background-color: #ad1f1f;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    height: 70px;
    z-index: 100;
    /* display: flex;
    justify-content: space-around;
    align-items: center; */
`;

export const HeaderContent = styled.div`
    padding: 0 10px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



