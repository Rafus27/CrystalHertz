import styled from "styled-components";

export const SelectMusic = {
  Container: styled.div<{ isSelected: boolean }>`
    background: ${props => props.isSelected === true ? "#ff6f08" : "rgba(20, 20, 20, 0.65)"};
    color: white;

    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px 20px 10px 20px;

    max-width: 100%;
    max-height: 80px;

    border-radius: 10px;

    padding: 10px;

    :hover {
      cursor: pointer;
    }
  `,

  InfoContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,

  Title: styled.h3`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;

    padding: 0;
    margin: auto 5px auto 10px;
  `,

  AlbumName: styled.span`
    font-size: 16px;
    font-style: normal;
    font-weight: 300;

    padding: 0;
    margin: auto auto auto 5px;
  `,

  Progress: {
    Container: styled.div`
      width: auto;

      display: flex;
      margin: auto 0 auto auto;
    `,

    // FIXME: width
    AudioInput: styled.input`
      width: 150px;

      background: white;

      position: relative;
    `,
  },
};
