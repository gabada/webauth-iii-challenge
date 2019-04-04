import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Signup = props => {
  const endpoint = 'http://localhost:5000/api/auth/register';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        axios
          .post(endpoint, { username, password, department })
          .then(res => localStorage.setItem('token', res.data))

          .then(() => props.history.push('/users'));
        // .then(() => {
        //   setUsername('');
        //   setPassword('');
        //   setDepartment('');
        // });
      }}
    >
      <input
        type='text'
        placeholder='username'
        onChange={e => setUsername(e.target.value)}
        name='username'
        value={username}
      />
      <input
        type='password'
        placeholder='password'
        onChange={e => setPassword(e.target.value)}
        name='password'
        value={password}
      />
      <input
        type='text'
        placeholder='department'
        onChange={e => setDepartment(e.target.value)}
        name='department'
        value={department}
      />
      <button type='submit'>Sign up now!</button>
    </form>
  );
};

// handleSubmit = event => {
//   event.preventDefault();

//   const endpoint = 'http://localhost:5000/api/auth/register';
//   axios
//     .post(endpoint, this.state)
//     .then(res => {
//       localStorage.setItem('token', res.data.token);
//       this.props.history.push('/users');
//     })
//     .catch(error => {
//       console.error('LOGIN ERROR', error);
//     });
// };

export default withRouter(Signup);
