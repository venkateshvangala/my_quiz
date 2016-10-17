import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../header/header'
import '../../stylesheets/common/main'

export default class MainLayout extends Component {
    render(){
        return(
            <div className='main-container'>
                  <Header/>
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-sm-12 col-md-12">
                              <main>
                                  {this.props.children}
                              </main>
                          </div>
                      </div>
                    </div>
            </div>
        )
    }
}
