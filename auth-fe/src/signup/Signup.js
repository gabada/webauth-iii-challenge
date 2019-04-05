import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Signup = props => {
  const endpoint = 'http://localhost:5000/api/auth/register';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  return (
    <>
      <h1>Sign up now!</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .post(endpoint, { username, password, department })
            .then(res => localStorage.setItem('token', res.data))
            .then(() => props.history.push('/users'));
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
    </>
  );
};

export default withRouter(Signup);
