import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
  background-color: ${({primary}) => primary ? 'green' : 'yellow'};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 5px;
  border: ${({border}) => border || 'solid 3px blue'}
`

const Icon = ({primary, border}) => {
    return (
      <StyledIcon border={border} primary={primary} />
    )
}

export default Icon