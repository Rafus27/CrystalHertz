import styled from "styled-components";
const PaymentItem = [
    {
        id: 2,
        title: "Сбербанк",
        icon: "https://cdn-icons-png.flaticon.com/512/10517/10517565.png",
    },
    {
        id: 3,
        title: "Виза Электрон",
        icon: "https://cdn-icons-png.flaticon.com/512/10517/10517565.png",
    },
    {
        id: 4,
        title: "СБП",
        icon: "https://cdn-icons-png.flaticon.com/512/10517/10517565.png",
    },
    {
        id: 1,
        title: "Добавить карту",
        icon: "https://cdn-icons-png.flaticon.com/512/10695/10695021.png ",
    },
];
const DiffPaymentItem = [
    {
        id: 1,
        title: "В унике отдам",
        description: "Я тебя знаю",
    },
];
/**
 * Children to Subscription modal [choosePayment]
 * @returns {JSX.Element}
 */
export const ChoosePayment = () => {
    return (<PaymentContainer>
      <PaymentGrid>
        {PaymentItem.map((item) => {
            return (<PaymentGridCard key={item.id}>
              <PaymentGridCardTop>
                <PaymentGridCardIcon src={item.icon} alt=""/>
                <p>{item.title.toUpperCase()}</p>
              </PaymentGridCardTop>
            </PaymentGridCard>);
        })}
      </PaymentGrid>
      <PaymentHeading>Другие способы оплаты</PaymentHeading>
      <PaymentGrid>
        {DiffPaymentItem.map((item) => {
            return (<PaymentGridCard key={item.id}>
              <p>{item.title.toUpperCase()}</p>
              <p>{item.description}</p>
            </PaymentGridCard>);
        })}
      </PaymentGrid>
    </PaymentContainer>);
};
// styles
const PaymentHeading = styled.h2 `
  font-size: 22px;
  font-weight: 200;
  text-transform: uppercase;
`;
const PaymentContainer = styled.div `
  width: 760px;
  max-height: 726px;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  padding: 15px;
`;
const PaymentGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;
const PaymentGridCard = styled.div `
  background-color: #222;
  color: #b1b1b1;
  max-width: 230px;
  height: 130px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.1s;
  &:hover {
    background-color: #333;
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.1s;
  }
`;
const PaymentGridCardTop = styled.div `
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const PaymentGridCardIcon = styled.img `
  width: 30px;
  height: 30px;
`;
