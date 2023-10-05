import styled from "styled-components";

export const RegistrationContainer = styled.div<{ isOpen: boolean }>`
  margin: ${(props) =>
    props.isOpen === true ? "auto auto auto 360px" : "auto auto auto 120px"};

  max-width: ${(props) => (props.isOpen === true ? "75vw" : "85vw")};

  transition: 0.4s;
`;

export const RegistrationForm = {
  Container: styled.div`
    max-width: 600px;
    max-height: 768px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px auto;

    background-color: #242424;

    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  `,

  Title: styled.h2`
    margin: 30px auto 60px auto;

    font-weight: 500;
  `,

  Input: styled.input`
    width: 380px;
    height: 40px;

    margin: 20px auto 0 auto;

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

  Button: styled.button`
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

    margin: 20px auto;
    padding: 30px;

    :hover {
      cursor: pointer;
    }
  `,
};
