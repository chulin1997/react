import React, { Component } from 'react'
import { Link, Route, Switch, withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import "./assets/css/animate.min.css"

import About from "./Components/About"
import News from "./Components/News"

// 注意：在CSSTransition组件中加上key属性

class App47 extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to="/about">关于</Link>
            </li>
            <li>
              <Link to="/news">新闻</Link>
            </li>
          </ul>
        </div>
        <div>
          <TransitionGroup>
            {/* 因为Switch只会匹配一个路由，因此可以直接使用CSSTransition包裹Switch */}
            <CSSTransition
              timeout={1000}
              classNames={{
                enter: "animate__animated",
                enterActive: "animate__animated animate__fadeInDown",
                exit: "animate__animated",
                exitActive: "animate__animated animate__fadeOutUp"
              }}
              // 加key是让CSSTransition知道自己的内容发生了变化
              key={this.props.location.pathname}
            >
              <Switch>
                <Route path={"/about"} component={About}></Route>
                <Route path={"/News"} component={News}></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default withRouter(App47)
