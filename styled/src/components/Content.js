import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const Title = styled.h1`
    color: #aaecf0;
`
const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
`
const Content = () => {
    return (
        <Section>
            <Title>💅🏻 Section</Title>
            <Button primary text="me first"/>
            <Button text="me second"/>
            <Icon primary/>
            <Icon/>
        </Section>
    )
}

export default Content

