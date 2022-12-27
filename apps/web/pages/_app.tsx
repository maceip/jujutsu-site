import { AppProps } from "next/app";
import "../styles/nextra.css";
import "../styles/fonts.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
