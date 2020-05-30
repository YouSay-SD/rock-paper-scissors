import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
    color: white;
    border: 1px solid rgba(255, 255, 255, .29);
    padding: 2em;
    border-radius: 5px
`

function Header() {
    return (
        <HeaderStyled>

            <h1>Rock Paper Scissors</h1>

        </HeaderStyled>
    )
}

export default Header
