import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../../translations/i18n';
import '../assets/scss/main.scss';

class Index extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="container">
        <Component {...pageProps} />
      </div>
    );
  }
}

export default appWithTranslation(Index);
