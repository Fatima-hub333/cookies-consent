/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Button from './Button'


const Title = styled.h1`
  color: #aac9f0;
`

const Section = styled.div`
  background-color: #aac9f0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 15px;
`

const Content = () => {
  return (
    <Section className='section'>
      <Title>💅 Section</Title>
      <Button text='me first'/>
      <Button text='me second'/>
    </Section>
  )
}

export default Content