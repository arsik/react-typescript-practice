import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';

const initialState = { name: '' }
type State = Readonly<typeof initialState>

class Header extends Component<object, State> {

  readonly state: State = initialState

  handleChange(event: React.FormEvent<HTMLInputElement>) : void {
    this.setState({ name: event.currentTarget.value });
  }

  render() {
    return (
      <header className="App-header">
        <p>{this.state.name}</p>
        <input placeholder="write your name" onChange={this.handleChange.bind(this)}/>
        <button>Done</button>
      </header>
    )
  }
}

export default Header;