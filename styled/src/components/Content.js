/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
  color: #aac9f0;
`

const Section = styled.div`
  background-color: #f0d1aa;
  flex-direction: column;
  display: flex;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 15px;
`

const Button = styled.button`
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`

const Content = () => {
  return (
    <Section className='section'>
      <Title>💅 Section</Title>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </Section>
  )
}

export default Content