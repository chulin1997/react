// 继承操作

import styled from "styled-components";

// 继承操作对于父的编写格式没有影响
// 继承样式，子要改写成"styled(父名)""
// styled(Title), 类似于 extends Title

const Title = styled.div`
  font-size: 60px;
  border: 6px solid red;
  color: yellow;
  background: green;
`;

const SubTitle = styled(Title)`
  border-color: blue;
`;

export { Title, SubTitle };
