import React,{Component} from "react"

class App8 extends Component{
  render (){
    return <button onClick={this.clickHandler}>点我</button>
  }

  clickHandler(){
    console.log("点我了",123);
  }
}

export default App8