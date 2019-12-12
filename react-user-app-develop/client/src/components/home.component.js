import React from 'react';
import './css/home.css'
import Button from 'react-bootstrap/Button';

export default class Home extends React.Component {


    render() {
        return (
            <div className="page-links">
              <b> | </b>
          <b></b>   <Button  className="btn btn-light" href="/login">Login</Button>
          <b> | </b>
          <Button  className="btn btn-light" href="/create-user">Create user</Button>
            <b> | </b>
            </div>
        );
    }
}
