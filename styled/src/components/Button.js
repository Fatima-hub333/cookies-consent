import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({primary}) => primary? 'red' : 'blue'};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    flex-direction: column;

    &:hover {
        background-color: grey;
    }

    .subtext {
      font-size: 10px;
    }
`
const Button = ({text, primary}) => {
    return (
        <StyledButton primary={primary}>
          {text}
          <p className='subtext'>Sub Text</p>
        </StyledButton>
    )
}

export default Button