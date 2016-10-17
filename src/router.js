import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from './components/layouts/main-layout'
import HomePage from './components/home/home-page'
import ScorePage from './components/score/score-page'
import QuestionsPage from './components/questions/questions-page'

export default(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/">
              <IndexRoute component={HomePage} />
            </Route>
            <Route path="score">
              <IndexRoute component={ScorePage} />
            </Route>
            <Route name="questions" path="/:name">
               <IndexRoute component={QuestionsPage} />
            </Route>
          </Route>
    </Router>
)
