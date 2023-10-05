import styled from "styled-components";

export const AuthorizationContainer = styled.div`
  max-width: 600px;
  max-height: 768px;

  margin: 40px auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #242424;

  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const AuthorizationTitle = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 30px auto 70px auto;
`;

export const AuthorizationInputs = {
  Container: styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Input: styled.input`
    width: 380px;
    height: 40px;

    margin: auto auto 50px auto;

    border-radius: 15px;
    border: none;

    background: #3e3e3e;

    font-size: 18px;
    color: white;

    padding: 10px;

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
      margin: auto auto auto 20px;
    }
  `,
};

export const AuthorizationRemember = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto auto 50px 100px;
  `,

  Checkbox: styled.input`
    width: 20px;
    height: 20px;

    transition: 0.4s;
  `,

  Label: styled.span`
    margin: auto auto auto 5px;
  `,
};

export const AuthorizationSubmitButton = styled.button`
  width: 200px;
  height: 40px;

  border: none;
  border-radius: 12px;

  background-color: #3e3e3e;
  color: white;

  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto auto 30px auto;
  padding: 30px;

  :hover {
    cursor: pointer;
  }
`;
