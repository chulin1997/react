// 参数传递操作（动态样式）

import styled from "styled-components";

// 如果父组件传递了属性给当前组件，那么当前组件会有一个props属性
// 接受props的语法
//  - 哪个位置数据要成动态接受的就在哪个地方写
//  - 需要通过函数的形式接收
// 动态传参支持默认值

const Title = styled.div`
  font-size: 60px;
  border: 6px solid red;
  color: ${(props) => props.textColor || "red"};
  background: green;
`;


export { Title };
