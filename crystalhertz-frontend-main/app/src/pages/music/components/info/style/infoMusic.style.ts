import styled from "styled-components";

export const InfoMusicMenu = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Author: styled.span`
    font-size: 22px;
    font-style: normal;
    font-weight: 400;

    margin: 20px auto;

    color: white;
  `,

  Logo: styled.img`
    max-width: 200px;
    max-height: 200px;

    margin: 15px auto 15px auto;

    pointer-events: none;
  `,

  Album: styled.span`
    font-size: 18px;
    font-style: normal;
    font-weight: 100;

    margin: 0 auto;
    color: white;
  `,

  Description: styled.p`
    margin: 15px 0 -5px 20px;
    color: rgba(167, 167, 167, 1);

    max-width: 87.5%;

    text-align: start;

    font-style: normal;
    color: rgba(167, 167, 167, 1);
  `,
};
