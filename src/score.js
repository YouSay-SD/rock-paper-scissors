import React from 'react'
import styled from 'styled-components'

const ScoreStyled = styled.div`
    background-color: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;

    small {
        color: #2A45C2;
        text-transform: uppercase;
        font-size: 0.62em;
    }

    p {
        color: #565468;
        font-size: 2.5em;
        margin: 0;
        font-weight: 700;
        letter-spacing: -2px;
    }
`

function Score() {
    return (
        <ScoreStyled>

            <small>Score</small>

            <p>12</p>

        </ScoreStyled>
    )
}

export default Score