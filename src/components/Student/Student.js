import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount() {
    console.log("id",this.props.match.params.id)
    let promise=axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    promise.then(response=>{
      console.log(response.data);
      this.setState({
        studentInfo:response.data
      })
    })
  }

  render() {
    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        {/* <Switch>
          <Link to={``}>Back to Class</Link>
        </Switch> */}
      </div>
    )
  }
}

