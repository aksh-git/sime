import React from 'react'
import Head from 'next/head'
import ThemeSwitch from './buttons/ThemeSwitch'
import Logo from './Logo'

function Layout({children}) {
  return (
    <div className='layout'>
      <div className='wrapper'>
        <div className='topball'></div>
        <div className='bottomball'></div>
      </div>
      <Head>
      <title>Simple image editor | SIME</title>
      <meta name="description" content="Simple and easy to use image editor." />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='main'>
        <div className='wrap'>
          <header className='w-full'>
              <Logo />
            <div className='flex items-center gap-8'>
              <div></div>
              <ThemeSwitch />
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout