import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeContext } from '@emotion/core'
import { theme } from '../theme'

export default class extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Next</title>
          <meta name='description' content='A Next app on Netlify.' />
        </Head>
        <ThemeContext.Provider value={theme}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </Container>
    )
  }
}
