import { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from '@reach/skip-nav'

export default function Document() {
  return (
    <Html className="inter">
      <Head />
      <body>
        <SkipNavLink />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
