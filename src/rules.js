import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button'

const RulesStyled = styled.div`
    text-align: center;

    .rules-overlay {
        background-color: white;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        h2 {
            color: #3B4262;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: -2px;
            margin-bottom: 16px;
        }
    }

    .close-button {
       padding-bottom: 40px;
    }
`

function Rules() {

    const [ visible, setVisible ] = useState( false )

    const handleToggleClick = () => {
        setVisible( !visible )
    }

    return (
        <RulesStyled>

            {
                ( visible ) && (

                    <div className="rules-overlay">

                        <h2>Rules</h2>

                        <img src="./images/image-rules.svg" alt="Game Rules" />

                        <img className="close-button" onClick={ handleToggleClick } src="./images/icon-close.svg" alt="Close The Game Rules" />

                    </div>

                )
            }

            <Button onClick={ handleToggleClick } />

        </RulesStyled>
    )
}

export default Rules