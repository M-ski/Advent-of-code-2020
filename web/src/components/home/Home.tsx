import React, { Component } from 'react';
import logo from './../../utils/logo.svg';
import './Home.scss';


export class Home extends Component<{}, any> {
    render() {
        return <div className="container App-content">
            <div className="row">
                <div className="col pt-5">
                    <p>Hi there!</p>
                </div>
            </div>
                <ul className="list-inline fixed-bottom">
                    <li className="list-inline-item">
                        <img src={logo} className="home-logo" alt="logo" />
                    </li>
                    <li className="list-inline-item">
                        <span className="home-top-pad">
                            Made with <code><a href="https://reactjs.org">React</a>/Bootstap/Love</code>!
                        </span>
                    </li>
                </ul>
        </div>
    }
}