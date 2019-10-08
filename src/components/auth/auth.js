import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './context';

import If from '../util/if';

/**
 *
 *
 * @class Auth
 * @extends {React.Component}
 */
class Auth extends React.Component {
  static contextType = LoginContext;

  /**
   *
   *
   * @returns
   * @memberof Auth
   */
  render() {
    let okToRender = false;

    try {
      okToRender = this.context.loggedIn
        && (this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : true);
    } catch (e) {
      console.warn('Not Authorized');
    }

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.array,
  capability: PropTypes.string,
};

export default Auth;
