import React, { Component, ReactNode } from 'react';
import { Navbar } from 'react-bootstrap';
import {ColorState} from '../../utils/Constants'
import {Link}  from 'react-router-dom';

type HeaderState = {
    selected?: String
    color: ColorState
}

export class Header extends Component<{}, HeaderState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            color: ColorState.DARK
        };
    }

    render(): ReactNode {
        const color = this.state.color;
        return <nav className={`navbar navbar-${color} navbar-expand-md bg-${color} sticky-top`}>
            {/* header */}
            <a className="navbar-brand">AOC 2020</a>
            {/* Collapsable Header */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Nav Bar links */}
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <span className="nav-link"><Link to="/">Home</Link></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link"><Link to="/about">About</Link></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link disabled">Disabled</span>
                    </li>
                </ul>
            </div>
        </nav>
    }

}