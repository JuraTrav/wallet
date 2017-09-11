import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render = () => {
    return (
      <div className="header">
        <div className="header-tabs">
          <ul>
            <li className={this.props.tabId === "1" ? "active" : ""}><Link to='/transaction'>Transactions</Link></li>
            <li className={this.props.tabId === "2" ? "active" : ""}><Link to='/overview'>Overview</Link></li>
            <li className={this.props.tabId === "3" ? "active" : ""}><Link to='/settings'>Wallet Settings</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
