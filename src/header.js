import React from 'react'
import styled from 'styled-components'
import Score from './score'

const HeaderStyled = styled.div`
    color: white;
    border: 1px solid rgba(255, 255, 255, .29);
    padding: 30px;
    border-radius: 8px;

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


