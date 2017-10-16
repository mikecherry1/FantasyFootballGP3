import React, { Component } from "react";

class SigninComponent extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false,
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
    <div className='signin'>
    <h1>Username</h1>
    <input
      name='username'
      value={this.state.username}
      onChange={this.handleChange}
      />
    <h1>Password</h1>
    <input
      name='password'
      value={this.state.password}
      onChange={this.handleChange}
    />
    </div>
  )
  //   <input
  //     name='username'
  //     value={this.state.username}
  //     onChange= {this.handleChange}
  //   />
  //   <input
  //     name='password'
  //     value={this.state.password}
  //     onChange= {this.handleChange}
  //  />
  //  <button onClick={() => {
  //    this.attemptLogin
  //   }> Sign in! </button>


  }
 }

export default SigninComponent
