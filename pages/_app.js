import App, { Container } from 'next/app'
import Head from 'next/head'
import { Global, ThemeContext } from '@emotion/core'
import { theme } from '../theme'
import { themeGet } from 'styled-system'
import { Offline } from '../components'

export default class extends App {
  constructor(props) {
    super(props)

    this.state = {
      online: true
    }
  }

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    this.setState({ online: navigator.onLine })
    window.addEventListener('online', () => this.setState({ online: true }))
    window.addEventListener('offline', () => this.setState({ online: false }))
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
          <Global
            styles={{
              '*,*::before, *::after': {
                boxSizing: 'inherit',
              },
              html: {
                boxSizing: 'border-box',
              },
              body: {
                backgroundColor: theme.colors.mirage,
                fontFamily: 'sans-serif',
                margin: 0,
              },
            }}
          />
          <Component {...pageProps} />
          {!this.state.online && <Offline />}
        </ThemeContext.Provider>
      </Container>
    )
  }
}
