import App, { Container } from 'next/app'
import Head from 'next/head'
import { Global, ThemeContext, keyframes } from '@emotion/core'
import { theme } from '../theme'
import { themeGet } from 'styled-system'
import { Offline, Header } from '../components'
import { PageTransition } from 'next-page-transitions'

const fadeIn = keyframes`
  from: { opacity: 0 }
  to { opacity: 1 }
`

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
    const { Component, pageProps, router } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Next</title>
          <meta name='description' content='A Next app on Netlify.' />
          <meta name='theme-color' content={theme.colors.mirage} />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='icon' href='/static/favicon.png' />
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
              '.page-transition-enter': {
                opacity: 0,
                transform: 'translate3d(0, 20px, 0)',
              },
              '.page-transition-enter-active': {
                opacity: 1,
                transform: 'translate3d(0, 0, 0)',
                transition: 'opacity 300ms, transform 300ms',
              },
              '.page-transition-exit': {
                opacity: 1,
              },
              '.page-transition-exit-active': {
                opacity: 0,
                transition: 'opacity 300s',
              },
            }}
          />
          <Header />
          <PageTransition
            timeout={300}
            skipInitialTransition
            classNames='page-transition'
          >
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          {!this.state.online && <Offline />}
        </ThemeContext.Provider>
      </Container>
    )
  }
}
