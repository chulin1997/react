import React, { Component } from "react";

// 只要使用了404路由，一定要通过路由包中的Switch组件包裹所有路由规则
// Switch，表示从众多的Route规则中只匹配一个

import { Link, Route, Switch } from "react-router-dom";

import Prod from "./Components/Prod";
import About from "./Components/About";
import NotFound from "./Components/NotFound";

export default class App41 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/prod">产品</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/prod" component={Prod}></Route>
          <Route path="/about" component={About}></Route>
          {/* 404路由 */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}
