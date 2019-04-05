import React from 'react';
import axios from 'axios';

import './users.css';

import requiresAuth from '../auth/requireAuth';

class Users extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        <h1>List of Users</h1>
        <ul>
          {this.state.users.map(u => (
            <div key={u.id}>
              <li>
                <strong>Username: </strong>
                {u.username}
              </li>
              <li>
                <strong>Department: </strong>
                {u.department}
              </li>
              <p />
            </div>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = `/users`;
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.error('USERS ERROR', error);
      });
  }
}

export default requiresAuth(Users);
