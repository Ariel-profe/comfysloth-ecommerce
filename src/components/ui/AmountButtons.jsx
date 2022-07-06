import React from 'react';
import styled from 'styled-components';
import {FaPlus, FaMinus} from 'react-icons/fa';

export const AmountButtons = ({amount, decrease, increase}) => {
  return (
    <Wrapper className='amount-btn'>
        <button className='amount-btn' onClick={decrease}>{<FaMinus />}</button>
        <h2 className='amount'>{amount}</h2>
        <button className='amount-btn' onClick={increase}>{<FaPlus />}</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    width: 140px;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    h2 {
        margin-bottom: 0;
    }
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 1rem 0;
        width: 2rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`
