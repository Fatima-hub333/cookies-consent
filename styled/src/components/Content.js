import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const Title = styled.h1`
    color: #aaecf0;
`

const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
`
const ParagraphTitle = styled(SubTitle)`
    color: grey;
`

const ReversedTitle = props => <ParagraphTitle {...props} children={props.children.split('').reverse()} />

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
            <SubTitle>I am a subtitle</SubTitle>
            <Button primary text="me first"/>
            <Button text="me second"/>
        <Icon border='solid 3px ' statusColor={'ready'} />
            <Icon status={ 'in-progress'} />
            <ParagraphTitle as={ReversedTitle}>I am a Paragraph</ParagraphTitle>
        </Section>
    )
}

export default Content

