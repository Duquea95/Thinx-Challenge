import React from 'react';
import PdpTop from './components/PdpTop';
import PdpBottom from './components/PdpBottom';

function App() {
  return (
    <div className="App">
      <div className="body-wrapper">
        <main>
          <PdpTop />
          <PdpBottom />
        </main>
      </div>
    </div>
  );
}

export default App;
