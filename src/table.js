import React, { useState } from 'react'
import styled from 'styled-components'
import Token from './token'
import { WhiteButton } from './button'

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

    .results {
        text-align: center;
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
        setPlaying( true )
        setPick( name )
        const housePick = elements[getRandomInt(0, 3)]
        const results = playWithIA( name, housePick )
        console.log(results)
    }

    // Play With IA
    const playWithIA = ( pick, housePick ) => {
        if ( housePick === pick ) {
            return 'Draw'
        }

        if ( pick === 'paper' ) {
            if ( housePick === 'scissors' ) {
                return 'Lose'
            }

            if ( housePick === 'rock' ) {
                return 'Win'
            }
        }

        if ( pick === 'scissors' ) {
            if ( housePick === 'paper' ) {
                return 'Win'
            }

            if ( housePick === 'rock' ) {
                return 'Lose'
            }
        }

        if ( pick === 'rock' ) {
            if ( housePick === 'paper' ) {
                return 'Lose'
            }

            if ( housePick === 'scissors' ) {
                return 'Win'
            }
        }
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
                            <WhiteButton onClick={ handleTryAgainClick }>
                                TRY AGAIN
                            </WhiteButton>
                        </div>
                    </>
                )
            }
            
        </TableStyled>
    )
}

export default Table