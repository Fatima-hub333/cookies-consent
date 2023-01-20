import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
  background-color: ${({ statusColor }) => {
  if (statusColor === 'ready') return 'green';
  else if (statusColor === 'steady') return 'orange';
  else if (statusColor === 'go') return 'red';
  else return 'yellow';
}};

&:hover{
  background-color: grey;
}
  
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 5px;
  border: ${({ border }) => border || 'solid 3px blue'}
  margin-left: ${({ status }) => {
  if (status === 'in-progress') return '70px';
  else if (status === 'done') return '140px';
  else return '5px';
  }}
`

const Icon = ({border, status, statusColor}) => {
    return (
      <StyledIcon border={border} status={status} statusColor={statusColor} />
    )
}

export default Icon