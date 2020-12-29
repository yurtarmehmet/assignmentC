import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Provider from "../context";
import{ createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        body {
          font-family: "Helvetica Neue";
        }
        .container {
            width: 80%;
            max-width: 1170pt;
            margin: 0 auto;
        }
    }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </div>
    )
  }
}