import React, { Component } from 'react';
import style from '../static/Style';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        {style}
        <Header
          header={this.props.header}
          title={this.props.title}
        />
        {this.props.children}
        <Footer footer="copyright CHOMEKO."/>
      </div>
    );
  }
}

export default Layout;