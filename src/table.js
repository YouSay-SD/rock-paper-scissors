import React from 'react'
import styled from 'styled-components'
import Token from './token'

const TableStyled = styled.div`
    display: grid;
    grid-template-columns: 130px 130px;
    justify-content: center;
    justify-items: center;
    gap: 40px 50px;
    margin: 30px 0;
    background-image: url('../images/bg-triangle.svg');
    background-size: 200px;
    background-position: center;
    background-repeat: no-repeat;

    & div:nth-of-type(3) {
        grid-column: span 2;
    }

    .line {
        width: 100%;
        height: 10px;
        background-color: black;
    }
`

function Table() {
    return (
        <TableStyled>
            
            <Token name="paper" />

            <Token name="scissors" />

            <Token name="rock" />

        </TableStyled>
    )
}

export default Table