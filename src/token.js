import React from 'react'
import styled from 'styled-components'

const TokenStyled = styled.div`
    width: 130px;
    height: 125px;
    border: 16px solid ${ ({ color }) => color.base };
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    box-shadow: 0 5px 0 ${ ({ color }) => color.border };
    cursor: pointer;
    
    &:active {
        transform: scale(.9);
    }
    
    .box-token {
        background-color: ${ ({ name }) => (name === 'default') ? '#122343' : 'white' };
        box-shadow: 0 -4px 0 ${({ name }) => (name === 'default') ? 'transparent' : '#BABFD4' };
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
    },

    default: {
        base: 'transparent',
        border: 'transparent',
    }
}

function Token({ name ='default', onClick }) {

    const handleClick = () => {
        onClick( name )
    }

    const color = colors[ name ]

    return ( 
        <TokenStyled color={ color } onClick={ handleClick } name={ name }>

            <div className="box-token">
                {
                    ( name === 'default' ) ? '' : <img src={`./images/icon-${ name }.svg`} alt="" />
                }

            </div>

        </TokenStyled>
    )
}

export default Token

