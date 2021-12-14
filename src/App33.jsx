import React, { Component } from 'react';

import axios from 'axios'
// 请求接口：https://api.i-lynn.cn/ip

class App33 extends Component {
  state = {
    ip_info: ''
  }
  render() {
    return (
      <div>
        当前地址是{this.state.ip_info}
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://api.i-lynn.cn/ip').then(res => {
      console.log(res);
      this.setState(state => {
        return {
          ip_info: res.data.ip + '-' + res.data.country + '-' + res.data.area
        }
      })
    })
  }
}

export default App33;
