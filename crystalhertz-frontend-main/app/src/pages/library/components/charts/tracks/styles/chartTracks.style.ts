import styled from "styled-components";

export const ChartTracksMenu = {
  Frame: styled.section`
    margin: 15px 20px auto 20px;

    max-width: 96.5%;
    height: auto;

    background: white;

    box-shadow: 0px 10px 26px 0px rgba(34, 60, 80, 0.2);

    border-radius: 20px;
    border: 0px solid #000;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,

  Item: styled.div`
    flex: 0 0 32%;
    height: 60px;
    margin-bottom: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  ItemImage: styled.img`
    width: 50px;
    height: 50px;

    background: #ff6f08;

    margin: auto 0 auto 5px;

    border-radius: 20px;
  `,

  ItemTitle: styled.span`
    margin: 0 auto 2.5px 0;

    color: black;
    font-size: 22px;
  `,

  ItemAuthorName: styled.span`
    color: #b1b1b1;
    font-size: 16px;
  `,
};
