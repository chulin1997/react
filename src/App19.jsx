// 函数组件-子组件
import React from 'react'

import PropTypes from 'prop-types'

function App19(props) {
  return (
    <div>
      函数组件（子）
      <div>海纳百川有容乃大，{props.next}-{props.name}</div>
    </div>
  )
}

App19.propTypes = {
  name: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired
}

App19.defaultProps = {
  name: 'hdasiohoih',
  next: '123123123123',
}

export default App19
