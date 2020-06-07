import React, { useState } from 'react'
import styled from 'styled-components'
import Token from './token'
import Button from './button'

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

    .in-game {
        text-align: center;
        text-transform: uppercase;
        font-size: .8em;
        font-weight: 700;
        letter-spacing: 1px;
    }
`

const elements = [
    'paper',
    'scissors',
    'rock'
]
 
function Table() {

    //const [ score, setScore ] = useState( 0 )
    const [ playing, setPlaying ] = useState( false )
    const [ pick, setPick ] = useState( '' )
    const getRandomInt = ( min, max ) => {
        return Math.floor( Math.random() * ( max - min )) + min
    }

    const onClick = ( name ) => {
        console.log( 'La casa eligio: ', elements[getRandomInt(0, 3)] )
        setPlaying( true )
        setPick( name )
    }

    // Try Again
    const handleTryAgainClick = () => {
        setPlaying( false );
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
                    <>
                        <div className="in-game">
                            <Token name={ pick } />
                            <p>You Picked</p>
                        </div>

                        <div className="in-game">
                            <Token />
                            <p>The house Picked</p>
                        </div>

                        <div className="results">
                            <h2>YOU ???</h2>
                            <Button onClick={ handleTryAgainClick }>
                                TRY AGAIN
                            </Button>
                        </div>
                    </>
                )
            }
            
        </TableStyled>
    )
}

export default Table