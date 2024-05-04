import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SquareIcon = styled.div`
    display: inline-block;
    position: relative;
`;

export const Square = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    max-width: 50px;
    max-height: 50px;
    background: #f9cf03;
    border-radius: 5px;
`;

export const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
`;

export const Letter = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 15px;
    font-weight: bold;
`;
