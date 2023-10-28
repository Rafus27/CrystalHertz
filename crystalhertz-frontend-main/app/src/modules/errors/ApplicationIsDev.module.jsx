import styled from "styled-components";
export const ApplicationIsDev = () => {
    return (<ApplicationOnDevMode>
      <ApplicationOnDevModeText>
        На данный момент на сайте ведутся технические работы! <br />
        Приносим извинения что вам приходится ждать.
      </ApplicationOnDevModeText>
    </ApplicationOnDevMode>);
};
const ApplicationOnDevMode = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto auto 0 auto;
  
  width: 100vw;
  height: 100vh;

  text-align: center;

  background-color: black;
  color: white;
`;
const ApplicationOnDevModeText = styled.p `
  font-size: 20px;
`;
