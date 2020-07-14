import * as React from 'react';
import cart from './../public/cart.jpeg';
import './App.css';
import Products from './containers/Products/Products';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Shopping Cart
      </header>
      <nav><img src={cart} /></nav>
      <Provider store={} >
      <Switch>
        <Route path="/" component={() => <Products /> } />
      </Switch>
      </Provider>
    </div>
  );
}

export default App;