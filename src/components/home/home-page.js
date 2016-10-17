import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'

export default class HomePage extends Component {

    state = {
      userName: ""
    }

    handleUserName(event) {
      this.setState({
        userName: event.target.value
      })
    }

    render(){
        return(
            <div className='container-home'>
                <h2 className="page-header">Welcome To Finomena</h2>
                <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                         <label>Username: </label>
                      </div>
                       <div className="col-md-12">
                          <input className="form-control" type="text" name="email" placeholder="Enter UserName/Email" onChange={this.handleUserName.bind(this)} value={this.state.userName} />
                       </div>

                  </div>
                   <div className="row">
                       <hr/>
                        <Link to={{ pathname: '/questions', query: { name: this.state.userName } }}> SignIn </Link>
                   </div>
                </div>
            </div>
        )
    }
}
