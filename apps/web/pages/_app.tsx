import { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import '@code-hike/mdx/dist/index.css'
import '../styles/globals.css'
import '../styles/fonts.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
