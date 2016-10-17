import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../stylesheets/header/header'

export default class Header extends Component{

    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container nav-container">
                   <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/home">
                          <img src="" alt="" />
                      </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <form className="navbar-form navbar-right">
                          <input type="text" className="form-control" placeholder="Search for Questions"/>
                      </form>
                  </div>
               </div>
            </nav>
        )
    }
}
