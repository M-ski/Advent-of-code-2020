import React, { Component } from 'react';
import logo from './../../utils/logo.svg';
import './Home.scss';


export class Home extends Component<{}, any> {
    render() {
        return <div className="container App-content">
            <div className="row">
                <div className="col pt-5 .offset-md-5">
                    <p>Hi there - why are you here? I probably sent this to you to show off some of my random coding I've been doing :) Anyway - I'm Matt, and I like to code</p>
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