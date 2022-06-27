import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import Footer from './Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
