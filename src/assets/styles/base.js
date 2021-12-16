// css-in-js最基本的使用

// 1.导入需要使用的包
import styled from "styled-components"

// 2.写样式(避开html自带的标签名)
const Title = styled.h1`
  font-size: 60px;
  color: red;
  background: yellow;
`

const SubTitle = styled.h1`
  font-size: 60px;
  color: red;
  background: yellow;
`

// 3.导出成员(按需)
export { Title, SubTitle }
