import React, { Component, Fragment } from "react";

function addCopyRight(Cmp) {
  return class Hoc extends Component{
    render() {
      return <Fragment>
        <Cmp></Cmp>
        <div>（c） 2021 HTML5 版权所有 </div>
      </Fragment>
    }
  }
}

export default addCopyRight