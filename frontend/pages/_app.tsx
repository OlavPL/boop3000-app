import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import { config } from '@/fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' 
import { NextUIProvider } from '@nextui-org/react';

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Header/> 
      <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
      {/* <Footer/> */}
    </>
  )
}

export default App