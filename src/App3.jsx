// 函数组件-父组件
import React from 'react'

import Child from './App4'

function App3() {
  return (
    <div>
      函数组件（父）
      <div>
        <Child next="壁立千仞无欲则刚" name="林则徐"></Child>
      </div>
    </div>
  )
}

export default App3
