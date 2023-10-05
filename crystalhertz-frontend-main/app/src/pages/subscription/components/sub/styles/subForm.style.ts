import styled, { keyframes } from "styled-components";

const checkboxAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.1); 
  }

  30% {
    opacity: 0.5; 
    transform: scale(1.3);
  }
  
  100% {
    opacity: 1;
  }
`;

export const SubscriptionMenuForm = {
  Container: styled.div`
    background: rgba(255, 255, 255, 0.8);

    max-width: 800px;
    max-height: 768px;

    border-radius: 12px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px auto;
  `,

  ContainerInner: styled.div`
    width: 95%;
    height: auto;

    display: flex;
    justify-content: start;

    position: relative;

    border-radius: 10px;

    margin: 30px auto 30px auto;

    background: rgba(255, 255, 255, 0.6);

    box-shadow: -1px 5px 13px 3px rgba(34, 60, 80, 0.2);
  `,

  Title: styled.span`
    color: black;

    font-size: 40px;

    position: absolute;

    margin: 10px auto auto 15px;

    font-weight: 300;
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;

    margin: 60px auto 20px 15px;
  `,

  DescriptionContainer: styled.div`
    position: absolute;
    right: 50px;

    margin: 30px auto;

    width: 250px;

    display: flex;
    flex-direction: column;

    font-weight: 300;

    color: black;
  `,

  PolicyAgree: styled.div`
    width: 95%;
    height: auto;

    max-height: 260px;

    display: flex;
    justify-content: start;

    position: relative;

    background: rgba(255, 255, 255, 0.6);

    border-radius: 10px;

    margin: 0 auto 15px auto;

    box-shadow: 0px 5px 13px 3px rgba(34, 60, 80, 0.2);

    overflow: scroll;
    overflow-x: hidden;
  `,

  PolicyAgreeDesc: styled.p`
    color: black;

    margin: 20px;
  `,

  PolicyAgreeSubContainer: styled.div`
    display: inline-flex;
    align-items: center;

    margin: 10px auto auto 25px;
  `,

  PolicyAgreeSubContainerDesc: styled.span`
    color: black;

    font-size: 16px;

    margin: auto auto auto 5px;
  `,

  TotalContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    width: 750px;
    margin-block: 20px;
    column-gap: 20px;
  `,

  ButtonBuy: styled.button<{
    policyAgree: boolean;
  }>`
    width: 250px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 20px;

    background-color: ${(props) =>
      props.policyAgree === true
        ? "rgba(255, 111, 8, 1)"
        : "rgba(255, 111, 8, 0.4)"};
    color: white;

    font-size: 22px;
    font-weight: 400;

    :hover {
      cursor: pointer;
    }
  `,

  Price: styled.div<{
    policyAgree: boolean;
  }>`
    display: ${(props) => (props.policyAgree === true ? "flex" : "none")};
    align-items: center;
    color: #000;
    padding: 10px;
    background-color: #d9d9d9;
    border-radius: 8px;
    border: 2px solid #9e9e9e;
  `,

  Checkbox: styled.input.attrs({
    type: "checkbox",
  })`
    width: 18px;
    height: 18px;
    cursor: pointer;

    &:checked {
      &::before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 2px;
        border: 1px solid #ff6f08;
      }
      &::after {
        content: "";
        display: block;
        width: 3px;
        height: 10px;
        border: solid #ff6f08;
        border-width: 0 3px 3px 0;
        position: relative;
        top: -55%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(40deg);
        animation: ${checkboxAnimation} 0.2s ease;
      }
    }
  `,
};
