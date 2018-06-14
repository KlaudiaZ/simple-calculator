import * as React from 'react';
import './App.css';
import Display from './components/Display';
import Interface from './components/Interface';

class App extends React.Component {
  public render() {
    return (  
      <div className="main">
        <Display />
        <Interface />
      </div>
    );
  }
}

export default App;
