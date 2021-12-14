import React, { Component } from 'react'

// withRouter 为了解决在根组件中不能使用编程式导航的问题
// Cannot read properties of undefined (reading 'push')

import { Route, withRouter } from "react-router-dom"
import About from "./Components/About"

class App43 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.go.bind(this)}>去关于我们</button>
        <Route path="/about" component={About}></Route>
      </div>
    )
  }
  go() {
    this.props.history.push({
      pathname: '/about'
    })

    // 如果push方法中只有pathname的话，也可以写成 this.props.history.push("/about")
  }
}

// export default App43
export default withRouter(App43)
