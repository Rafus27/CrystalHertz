// styles
import styled from "styled-components";
export const SubDisplayName = () => {
    return (<Container>
      <Username>{"username"}</Username>
    </Container>);
};
const Container = styled.div `
  width: 800px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.8);

  border-radius: 30px;
`;
const Username = styled.span `
  color: black;

  font-size: 22px;
`;
