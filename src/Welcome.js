import './Welcome.css';
import React, { Component } from 'react';
import Input from './components/input/Input';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

class Welcome extends Component {
  render() {
    const {title, footer_desc} = this.props;

    return(
  <div className='Welcome'>
      <Header title={title}></Header>
      <Input/>
      <Footer description={footer_desc}></Footer>
    </div>
  );
}
  }
  

export default Welcome;
