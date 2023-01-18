import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`

const Button = ({text}) => {
  return (
    <StyledButton>{ text }</StyledButton>
  )
}

export default Button