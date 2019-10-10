import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';

const API = process.env.REACT_APP_API;

export const LoginContext = React.createContext();

/**
 *
 *
 * @class LoginProvider
 * @extends {React.Component}
 */
class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      token: null,
      user: {},
    };
  }

  /**
   *
   *
   * @memberof LoginProvider
   */
  login = (username, password, type) => {
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      }),
    };

    if (type === 'signup') {
      options.body = JSON.stringify({ username, password });
      options.headers = new Headers({
        'Content-Type': 'application/json',
      });
    }

    fetch(`${API}/${type}`, options)
      .then((response) => response.text())
      .then((token) => this.validateToken(token))
      .catch(console.error);
  }

  /**
   *
   *
   * @memberof LoginProvider
   */
  validateToken = (token) => {
    try {
      const user = jwt.verify(token, process.env.REACT_APP_SECRET);
      console.log(user);
      this.setLoginState(true, token, user);
    } catch (e) {
      this.setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }
  };

  /**
   *
   *
   * @memberof LoginProvider
   */
  logout = () => {
    this.setLoginState(false, null, {});
  };

  /**
   *
   *
   * @memberof LoginProvider
   */
  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user });
  };

  /**
   *
   *
   * @memberof LoginProvider
   */
  componentDidMount() {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    this.validateToken(token);
  }

  /**
   *
   *
   * @returns
   * @memberof LoginProvider
   */
  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

LoginProvider.propTypes = {
  children: PropTypes.array,
};

export default LoginProvider;
