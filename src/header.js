import React from 'react'
import styled from 'styled-components'
import Score from './score'

const HeaderStyled = styled.div`
    color: white;
    border: 3px solid rgba(255, 255, 255, .29);
    padding: 12px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 1.1em;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
    }
`

function Header() {
    return (
        <HeaderStyled>

            <h1>Rock <br />Paper <br />Scissors</h1>

            <Score />

        </HeaderStyled>
    )
}

export default Header


