// 函数组件-子组件
import React from 'react'

function App4(props) {
  return (
    <div>
      函数组件（子）
      <div>海纳百川有容乃大，{props.next}-{props.name}</div>
    </div>
  )
}

export default App4
