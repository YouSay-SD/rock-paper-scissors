import React from 'react';
import './App.css';
import Header from './header' 
import styled from 'styled-components'
import Wrapper from './wrapper'
import Table from './table'

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1F3757 0%, #131537 100%);
  color: white;
  
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  .app-content {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

function App() {
  return (
    <AppStyled>

      <Wrapper>

        <div className="app-content">

          <Header />

          <Table />

          <span>Rules</span>

        </div>

      </Wrapper>

    </AppStyled>
  );
}

export default App;
