import styled from "styled-components";
/**
 * Children to Subscription modal [surprise]
 * @returns {JSX.Element}
 */
export const Surprise = () => {
    return (<SurpriseContainer>
      <SurpriseName placeholder="Имя получателя" maxLength={16}/>
      <SurpriseFlexContainer>
        <SurpriseCard>
          <SurpriseCardAd src="https://i.ytimg.com/vi/UdMS56Zeh18/maxresdefault.jpg"/>
        </SurpriseCard>
        <SurpriseCard>
          <SurpriseCardForm placeholder="Письмо получателю..."/>
        </SurpriseCard>
      </SurpriseFlexContainer>
      <SurpriseButtonContainer>
        <SurpriseButton>Далее</SurpriseButton>
        <SurpriseButton>Отмена</SurpriseButton>
      </SurpriseButtonContainer>
    </SurpriseContainer>);
};
// styles
const SurpriseContainer = styled.div `
  max-width: 780px;
  max-height: 400px;
  background-color: #d9d9d9;
  color: #000;
  border-radius: 8px;
  padding: 20px;
`;
const SurpriseName = styled.input.attrs({ type: "text" }) `
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  text-decoration: underline;
  border: none;
  outline: none;
  margin-bottom: 20px;
  background-color: transparent;
`;
const SurpriseFlexContainer = styled.div `
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
`;
const SurpriseCard = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: 230px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const SurpriseCardAd = styled.img `
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
`;
const SurpriseCardForm = styled.textarea `
  font-size: 20px;
  width: 90%;
  height: 90%;
  resize: none;
  border: none;
  outline: none;
`;
const SurpriseButtonContainer = styled.div `
  display: flex;
  column-gap: 20px;
  justify-content: right;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;
const SurpriseButton = styled.button `
  width: 175px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  transition: all 0.1s ease;

  :first-child {
    background-color: rgba(255, 111, 8, 0.8);
    &:hover {
      cursor: pointer;
      background-color: rgba(255, 111, 8, 0.7);
      transform: scale(1.01);
    }
  }

  :last-child {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(177, 177, 177, 1);
    &:hover {
      color: #000;
      cursor: pointer;
      transform: scale(1.01);
    }
  }
`;
