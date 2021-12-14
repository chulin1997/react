import React, { Component } from 'react'

import PropTypes from 'prop-types'

class App17 extends Component {
  constructor(props){
    super(props)
  }

  // props类型约束
  static propTypes = {
    next: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  // 定义静态属性默认值
  static defaultProps = {
    name: '张三',
    next: 'biliqianrenwuyuzegang'
  }

  render() {
    return (
      <div>
        这是子组件
        <div>{this.props.next}</div>
        <div>{this.props.name}</div>
      </div>
    )
  }
}

// App17.propTypes = {
//   next: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired
// }

// App17.defaultProps = {
//   name: '张三',
//   next: 'biliqianrenwuyuzegang'
// }

export default App17
