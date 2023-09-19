import React from 'react';
import BasicNav from '@/components/nav/navbar';
import '@/styles/globals.css'

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <React.Fragment>
    <BasicNav />
    <Component {...pageProps} />
    </React.Fragment>
}
