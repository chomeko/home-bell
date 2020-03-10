import React, { Component } from 'react';
import style from '../static/Style';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet='uft-8' />
          <meta name='viewport'
            content='initial-scale=1.0, width=device-width' />
        </Head>
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