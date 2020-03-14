import React from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
  display: flex;
  align-items: center;
  paddding-top: 5rem;
  flex-direction: column;

`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const RequestAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    console.log(phrase[0]);
    
  }

  return (

    <Container> 
      <Boton
        onClick={RequestAPI}
      >
        Get Quote
      </Boton>
    </Container>
  );
}

export default App;
