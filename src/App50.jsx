import React, { Component } from "react";

import { Title } from "./assets/styles/props";

// 动态样式参数，其实就是之前的组件传值

export default class App50 extends Component {
  render() {
    return (
      <div>
        <Title textColor={"white"}>海纳百川有容乃大，壁立千仞无欲则刚</Title>
        <Title textColor={"blue"}>海纳百川有容乃大，壁立千仞无欲则刚</Title>
        <Title textColor={"yellow"}>海纳百川有容乃大，壁立千仞无欲则刚</Title>
        <Title>海纳百川有容乃大，壁立千仞无欲则刚</Title>
      </div>
    );
  }
}
