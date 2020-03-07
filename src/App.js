import React from 'react';
import Container from './Container';
import ListItem from './ListItem';
import ListComponent from './ListComponent';

function App() {
  return (
    <>
    <div className="App">
      <Container />
    </div>

    <div className="App">
        <ListItem />
    </div>

    <div className="App">
        <ListComponent />
    </div>
    </>
  );
}

export default App;
