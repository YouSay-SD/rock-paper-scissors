import React from 'react'
import styled from 'styled-components'
import Token from './token'

const TableStyled = styled.div`
    display: grid;
    grid-template-columns: 130px 130px;
    justify-content: center;
    justify-items: center;
    grid-gap: 50px;

    & div:nth-of-type(3) {
        grid-column: span 2;
    }
`

function Table() {
    return (
        <TableStyled>

            <Token name="rock" />

            <Token name="paper" />

            <Token name="scissors" />

        </TableStyled>
    )
}

export default Table