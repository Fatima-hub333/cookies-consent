import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
  background-color: ${({primary}) => primary ? 'green' : 'yellow'};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 5px;
`

const Icon = ({primary}) => {
    return (
      <StyledIcon primary={primary} />
    )
}

export default Icon