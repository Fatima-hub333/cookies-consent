import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './components/Content'
import './style.css'

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Progress Tracker</h1>
        <div>
          <div className='section'>
            <div className='weekday-title'>M</div>
          </div>
          <div className='section'>
            <div className='weekday-title'>T</div>
          </div>
          <div className='section'>
            <div className='weekday-title'>W</div>
          </div>
          <div className='section'>
            <div className='weekday-title'>T</div>
          </div>
          <div className='section'>
            <div className='weekday-title'>F</div>
          </div>
          <div className='section'>
            <div className='weekday-title'>S</div>
          </div>
          <div className='section'>
            <div className='weekday-title'>S</div>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));