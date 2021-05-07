import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head>
          <title>Virtual Kernel</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={process.env.BACKEND_URL + '/favicon.ico'}
          />
          <style>
            {`
            #__next { height: 100% }
          `}
          </style>
        </Head>
        <body style={{ height: '100%', margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
