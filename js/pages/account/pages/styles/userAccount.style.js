import styled from "styled-components";
export const ListenerAccount = {
    Frame: styled.section `
    max-width: 100%;
    min-height: 100vh;

    overflow: auto;

    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(121, 62, 9, 1) 50%,
      rgba(237, 107, 14, 1) 100%
    );
  `,
    Container: styled.div `
    margin: ${(props) => props.isOpen === true ? "20px 20px 20px 380px" : "20px 20px 20px 140px"};

    transition: 0.4s;

    position: relative;
    color: black;
  `,
};
export const ListenerAccountProfile = {
    Container: styled.div `
    background-color: #d9d9d9;

    display: flex;
    flex-direction: row;

    max-width: 100%;
    max-height: 300px;

    border-radius: 20px;
  `,
    ProfileImage: styled.img `
    width: 250px;
    height: 250px;

    border-radius: 20px;

    margin: 25px 0 25px 30px;

    position: relative;

    pointer-events: none;
  `,
};
export const ListenerDisplay = {
    Container: styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 50px auto 50px 10px;

    max-width: auto;
    max-height: auto;
  `,
    DisplayValue: styled.span `
    background-color: #5f5f5f;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto 10px auto;

    width: 290px;
    height: 60px;

    border-radius: 25px;

    font-size: 22px;
  `,
    DisplayButton: styled.button `
    background-color: #ed6b0e;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto 10px auto;

    width: 290px;
    height: 60px;

    border-radius: 25px;
    border: none;

    font-size: 24px;

    :hover {
      cursor: pointer;
    }
  `,
};
export const ListenerDescription = {
    Container: styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;

    position: relative;

    margin: 15px 30px 5px 0;

    max-width: auto;
    max-height: auto;
  `,
    Title: styled.span `
    font-size: 26px;

    color: black;

    width: 170px;

    transition: 0.4s;

    margin: ${(props) => props.isOpen === true ? "10px 3vmax auto 15px" : "10px 20vw auto 15px"};
  `,
    Role: styled.div `
    max-width: 250px;
    height: 50px;

    background-color: #ff6f08;

    color: white;

    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto auto auto;
    padding: 2.5px 40px;

    border-radius: 20px;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `,
    TextArea: styled.div `
    background-color: white;
    color: black;

    position: absolute;

    max-width: 92.5%;
    max-height: 125px;

    border-radius: 15px;

    font-size: 18px;

    padding: 10px;
    margin: 75px auto;

    display: flex;
    justify-content: start;
  `,
    StatusSubscribe: styled.div `
    background-color: white;
    color: black;

    position: absolute;

    width: 92.5%;
    max-height: auto;

    border-radius: 15px;

    font-size: 24px;

    bottom: 0;

    padding: 10px;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
export const ListenerTracks = {
    Frame: styled.div `
    border-radius: 20px;

    width: auto;
    height: auto;

    margin: 20px auto 20px auto;
    padding: 10px;

    background: #161616;
  `,
    Title: styled.span `
    font-size: 24px;
    color: white;

    margin: 0 auto;
  `,
    Container: styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    background: #282828;

    border-radius: 20px;

    margin: 10px;
    padding: 10px;
  `,
    Item: styled.div `
    flex: 0 0 32%;
    height: 60px;
    margin-bottom: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
  `,
    Img: styled.img `
    width: 50px;
    height: 50px;

    background: #ff6f08;

    margin: auto 5px auto 5px;

    border-radius: 20px;
  `,
    Album: styled.span `
    margin: 0 auto 2.5px 0;

    color: #b1b1b1;
    font-size: 16px;
  `,
    Name: styled.span `
    color: white;
    font-size: 22px;
  `,
};
