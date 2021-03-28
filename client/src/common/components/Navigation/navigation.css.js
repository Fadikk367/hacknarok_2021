import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
`;

export const Link = styled(NavLink)`
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    color: white;
    text-decoration: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
`;

export const LogoutButton = styled(Button)`
    && {
        color: white;
        padding: 10px;
    }
`;

export const Line = styled.div`
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
`;

export const MenuBurger = styled.div` 
    cursor: pointer;
    display: block;
    margin-left: auto;
    padding: 10px;


    ${Line}:nth-child(1).toggle {
        transform: ${({ open }) => open ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)'};
    } 
    
    ${Line}:nth-child(2).toggle {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    ${Line}:nth-child(3).toggle {
        transform: ${({ open }) => open ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)'};
    } 
`

