import React, { useState } from 'react'
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
    background-size: ${({ playing }) => !playing ? '200px' : '0' };
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

    const [ playing, setPlaying ] = useState( false )

    const onClick = ( name ) => {
        console.log( name )

        setPlaying( true )
    }

    return (
        <TableStyled playing={ playing }>

            {
                !playing ? (

                    <>
                        <Token name="paper" onClick={ onClick } />
            
                        <Token name="scissors" onClick={ onClick } />
            
                        <Token name="rock" onClick={ onClick } />
                    </>

                ) : (

                    <p>Estoy Jugando</p>
                    
                )
            }
            
        </TableStyled>
    )
}

export default Table