import React from 'react'
import { ButtonStyled } from './Button.styled'

const Button = ({ text, onClick, width}) => {
  return (
    <ButtonStyled
      type="button"
      onClick={onClick}
      $width={width}
    >
      {text}
    </ButtonStyled>
  )
}

export default Button