import React, { Component } from "react";
// 导入动画组件包中的东西
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./assets/css/animate.min.css";

// 实现步骤
// 1. 按照两步骤
//  - 先去实现没有动画的效果
//  - 实现上一步后，再去考虑加上动画效果

// 2. 以当前案例，有多少个h3标签最终就有多少个<CSSTransition></CSSTransition>组件

export default class App46 extends Component {
  state = {
    userName: ["张三"],
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handler.bind(this)}>添加</button>
        </div>
        <hr />
        <div>
          <TransitionGroup>
            {this.state.userName.map((value, index) => {
              return (
                <CSSTransition
                  key={index}
                  in={true}
                  timeout={1000}
                  classNames={{
                    enter: 'animate__animated',
                    enterActive: 'animate__animated animate__fadeInUp',
                  }}
                >
                  <h3>{value}</h3>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
      </div>
    );
  }

  handler() {
    this.setState((state) => {
      return {
        userName: [...state.userName, "李四" + Math.random()],
      };
    });
  }
}
