import React from 'react';
import './App.css'
import CakeContainer from './CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import Button from './component/button/button'

function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        <header className="App">
          <CakeContainer />
          <Button label="click me please"/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
