// lib
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// styles
import { SubscriptionMenuForm } from "./styles/subForm.style";
import { Modal } from "antd";
// components
import { SubButton } from "./SubButton.component";
import { Surprise } from "../Surprise.component";
import { ChoosePayment } from "../ChoosePayment.component";
import { ChoosePlan } from "../ChoosePlan.component";
// other
import { subsTexts } from "../../../../constants";
export const SubForm = () => {
    const [policyisAgree, setPolicyIsAgree] = useReducer((v) => !v, false);
    const [showModal, setShowModal] = useReducer((v) => !v, false);
    const [selectModal, setSelectModal] = useState("");
    const uuid = uuidv4();
    const navigate = useNavigate();
    const handlerBuyingSubs = async () => {
        navigate(`/pay/${uuid}`, { replace: false });
    };
    return (<SubscriptionMenuForm.Container>
      <Modal title={`${selectModal === "surprise"
            ? "Crystal+ в подарок"
            : "Выберите способ оплаты"}`} centered open={showModal} onCancel={setShowModal} footer={[]} style={{ minWidth: "fit-content" }}>
        {selectModal === "surprise" && <Surprise />}
        {selectModal === "choosePayment" && <ChoosePayment />}
      </Modal>

      <SubscriptionMenuForm.ContainerInner>
        <SubscriptionMenuForm.Title>
          Подписка Crystal+
        </SubscriptionMenuForm.Title>

        <SubscriptionMenuForm.ButtonContainer>
          <SubButton color={"rgba(158, 4, 183, 1)"} message={"Купить в подарок"} cb={() => {
            setShowModal();
            setSelectModal("surprise");
        }}/>
          <SubButton color={"rgba(255, 111, 8, 0.8)"} message={"Выбрать способ оплаты"} cb={() => {
            setShowModal();
            setSelectModal("choosePayment");
        }}/>
          <ChoosePlan />
        </SubscriptionMenuForm.ButtonContainer>

        <SubscriptionMenuForm.DescriptionContainer>
          {subsTexts.descsMsg}
          <br />
          <br />
          {subsTexts.descsMsg2}
        </SubscriptionMenuForm.DescriptionContainer>
      </SubscriptionMenuForm.ContainerInner>

      <SubscriptionMenuForm.PolicyAgree>
        <SubscriptionMenuForm.PolicyAgreeDesc>
          {subsTexts.policyAgreeMsg}
        </SubscriptionMenuForm.PolicyAgreeDesc>
      </SubscriptionMenuForm.PolicyAgree>

      <SubscriptionMenuForm.PolicyAgreeSubContainer>
        <SubscriptionMenuForm.Checkbox defaultChecked={policyisAgree} onChange={setPolicyIsAgree}/>
        <SubscriptionMenuForm.PolicyAgreeSubContainerDesc>
          Я принимаю пользовательское соглашение
        </SubscriptionMenuForm.PolicyAgreeSubContainerDesc>
      </SubscriptionMenuForm.PolicyAgreeSubContainer>
      <SubscriptionMenuForm.TotalContainer>
        <SubscriptionMenuForm.Price policyAgree={policyisAgree}>
          150 руб.
        </SubscriptionMenuForm.Price>
        <SubscriptionMenuForm.ButtonBuy policyAgree={policyisAgree} onClick={handlerBuyingSubs}>
          Оплатить
        </SubscriptionMenuForm.ButtonBuy>
      </SubscriptionMenuForm.TotalContainer>
    </SubscriptionMenuForm.Container>);
};
