import React from 'react'
import styled from 'styled-components'

const TokenStyled = styled.div`
    width: 130px;
    height: 125px;
    border: 16px solid ${ ({ color }) => color.base };
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    background-color: white;
    box-shadow: 0 5px 0 ${ ({ color }) => color.border };
    cursor: pointer;

    &:active {
        transform: scale(.9);
    }

    .box-token {
        box-shadow: 0 -4px 0 #BABFD4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-radius: 50%;
        align-self: stretch;
    } 
`

const colors = {
    paper: {
        base: '#516ef4',
        border: '#2543c3',
    },

    rock: {
        base: '#de3a5a',
        border: '#980e31',
    },

    scissors: {
        base: '#eca81e',
        border: '#c76c14',
    }
}

function Token({ name }) {
    return (
        <TokenStyled color={ colors[ name ] }>

            <div className="box-token">

                <img src={`./images/icon-${ name }.svg`} />

            </div>

        </TokenStyled>
    )
}

export default Token

