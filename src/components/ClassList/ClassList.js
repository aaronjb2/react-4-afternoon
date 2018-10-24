import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
    
  }

  componentDidMount() {
    let promise = axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`);
    promise.then(response=>{
      this.setState({
        students:response.data
      });
    })
  }

  render() {
    let students = this.state.students.map((element,index,arr)=>{
      return <Link to={`/student/${element.id}`} key={index}><h3>{element.first_name} {element.last_name}</h3></Link>
    });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}

