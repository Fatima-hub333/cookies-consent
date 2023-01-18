import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './components/Content'
import './style.css'

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <Content />
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));