import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
    display: inline-flex;
    border: 1px solid white;
    border-radius: 8px;
    min-width: 128px;
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 2.5px;
    line-height: 1;
`

export const WhiteButton = styled( ButtonStyled )`
    background-color: white;
    color: #101a3f;
    min-width: 220px;
`

function Button({ children, ...props }) {
    return (
        <ButtonStyled { ...props }>

            { children }

        </ButtonStyled>
    )
}

export default Button