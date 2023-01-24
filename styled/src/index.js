import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Section from './components/Section'

const Title = styled.h1`
  color: #b19cd9;
`


class Main extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section text='M' progress='100%' day={1} />
          <Section text='T' progress='80%' day={2}/>
          <Section text='W' progress='70%' day={3}/>
          <Section text='T' progress='60%' day={4}/>
          <Section text='F' progress='40%' day={5}/>
          <Section text='S' progress='20%' day={6}/>
          <Section text='S' progress='10%' day={7}/>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))