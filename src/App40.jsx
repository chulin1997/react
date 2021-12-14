import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

import NowPlaying from './Components/NowPlaying'

export default class App40 extends Component {
  render() {
    return (
      <div>
        {/* 从“/”跳转到“/films/nowplaying” */}
        <Redirect from="/" to="/films/nowplaying"></Redirect>
        <Route path="/films/nowplaying" component={NowPlaying}></Route>
      </div>
    )
  }
}
