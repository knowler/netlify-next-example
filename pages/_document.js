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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
