import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Global } from '@emotion/core'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta key="charSet" className="next-head" charSet="utf-8" />
        </Head>
        <body>
          <Global
            styles={{
              '*,*::before, *::after': {
                boxSizing: 'inherit',
              },
              html: {
                boxSizing: 'border-box',
              },
              body: {
                fontFamily: 'sans-serif',
                margin: 0,
              },
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
