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
    const [ pick, setPick ] = useState( ' ' )

    const onClick = ( name ) => {
        setPlaying( true )
        setPick( name )
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
                    <section className="in-game">
                        <div>
                            <Token name={ pick } />
                            <p>You Picked</p>
                        </div>

                        <div>
                            <p>The house Picked</p>
                        </div>
                    </section>
                )
            }
            
        </TableStyled>
    )
}

export default Table