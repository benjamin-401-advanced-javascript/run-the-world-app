import React from 'react';
import { LoginContext } from './context';

import If from '../util/if';

/**
 *
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {
  static contextType = LoginContext;

  /**
   *Creates an instance of Login.
   * @param {*} props
   * @memberof Login
   */
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  /**
   *
   *
   * @memberof Login
   */
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /**
   *
   *
   * @memberof Login
   */
  handleSubmit = (e, type) => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password, type);
  };

  /**
   *
   *
   * @returns
   * @memberof Login
   */
  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </If>

        <If condition={!this.context.loggedIn}>
          <form>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <button onClick={(e) => this.handleSubmit(e, 'signin')}>Sign In</button>
            <button onClick={(e) => this.handleSubmit(e, 'signup')}>Sign Up</button>
          </form>
        </If>
      </>
    );
  }
}

export default Login;
