import NavDrawer from '@/components/NavDrawer'
import UserTabs from '@/components/TabMenu'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <div>
    <NavDrawer>
      <UserTabs>
      <Component {...pageProps} />  
      </UserTabs>
      </NavDrawer>
    <Head>
        <title>APN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  </div>
}
