import React from "react"

function clickHandler(){
  console.log("我点了");
}

function App7() {
  // 事件绑定属性
  return <button onClick={clickHandler}>点我</button>
}

export default App7;