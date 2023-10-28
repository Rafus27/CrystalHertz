import styled from "styled-components";
export const AddMusic = {
    Frame: styled.div `
    background-color: #ff6f08;

    width: 100%;
    height: 100%;

    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    display: flex;
    justify-content: center;
  `,
    Container: styled.div `
    background-color: white;
    color: black;

    display: flex;
    margin: auto;

    max-width: 85%;

    width: 100%;
    height: 92%;

    border-radius: 15px;
  `,
    Form: styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 10px auto;

    max-width: 300px;
    width: 90%;
  `,
    FormLabel: styled.span `
    font-size: 16px;
    font-weight: 100;

    max-width: 300px;
    width: 100%;

    margin: 10px auto 5px auto;
  `,
    Button: styled.button `
    width: 200px;
    height: 50px;

    background-color: ${(props) => props?.agreePolicy === true ? "#ff6f08" : "rgba(255, 111, 8, 0.35)"};
    color: white;

    border-radius: 20px;
    border: none;

    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    text-align: center;
  `,
};
