import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './style.css'
import Content from './components/Content'
import styled from 'styled-components'

// const Title = styled.h1`
//   color: #b19cd9;
// `

// const Section = styled.div`
//   background-color: #ffffff;
//   border: solid 3px grey;
//   margin: 4px;
//   width: 300px;
//   height: 50px;
//   border-radius: 10px;
//   display: flex;
//   justify-content: left;
//   font-size: 40px;
//   color: #ff6961;
// `

// const WeekdayTitle = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 50px;
//   border-right: solid 3px lightgrey;
// `

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <Content />
        {/* <Title>Progress Tracker</Title>
        <div>
          <Section>
            <WeekdayTitle className='weekday-title'>M</WeekdayTitle>
          </Section>

          <Section>
            <WeekdayTitle className='weekday-title'>T</WeekdayTitle>
          </Section>

          <Section>
            <WeekdayTitle className='weekday-title'>W</WeekdayTitle>
          </Section>

          <Section>
            <WeekdayTitle className='weekday-title'>T</WeekdayTitle>
          </Section>

          <Section>
            <WeekdayTitle className='weekday-title'>F</WeekdayTitle>
          </Section>

          <Section>
            <WeekdayTitle className='weekday-title'>S</WeekdayTitle>
          </Section>

          <Section>
            <WeekdayTitle className='weekday-title'>S</WeekdayTitle>
          </Section>
        </div> */}
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));