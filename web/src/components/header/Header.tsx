import React, {Component} from 'react'

type HeaderState = {
    selected: String
}

export class Header extends Component<{}, HeaderState> {

    render() {
        return <nav className="navbar navbar-light bg-light fixed-top">AOC 2020</nav>
    }

}