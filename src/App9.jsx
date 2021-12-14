import React , {Component} from "react"

class App9 extends Component {
  render(){
    return <button onClick={this.clickHandler}>点我</button>
  }
  clickHandler(e){
    console.log("点了",123);
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.target.innerHTML);
  }
}

export default App9