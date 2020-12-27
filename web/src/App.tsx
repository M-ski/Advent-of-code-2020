import React, { Component } from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Route, BrowserRouter} from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { ColorState } from './utils/Constants';

type AppState = {
  color: ColorState
}

export default class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
        color: ColorState.DARK
    };
  }

  render() {
    return <div className={`App App-${this.state.color}`}>
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  </div>
  }
}