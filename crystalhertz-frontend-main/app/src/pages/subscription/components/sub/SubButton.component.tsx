// lib
import { FC } from 'react'

// styles
import styled from 'styled-components'

/**
 * @param color - any colors require format
 * @param message - Text in button
 * @param cb - callback => void;
 */
type SubButtonProps = {
  color: string
  message: string
  cb: () => void
}

/**
 * Компонент для создания кнопки
 * @param props - type SubButtonProps
 * @returns {JSX.Element}
 */
export const SubButton: FC<SubButtonProps> = (props): JSX.Element => {
  return (
    <Button color={props.color} onClick={props.cb}>
      {props.message.toUpperCase()}
    </Button>
  )
}

const Button = styled.button<{ color: string }>`
  background-color: ${props => props.color};
  box-shadow: 0px 14px 28px 2px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  width: 370px;
  height: 45px;
  color: white;

  border: none;

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  margin: 5px 0 5px 0;

  position: relative;

  :hover {
    cursor: pointer;
  }
`
