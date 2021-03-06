import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [logo, setLogo] = useState('https://lorraxs.com/inventory/imgs/bread.png')

  useEffect(() => {
    const MessageHandler=(e)=>{
      let url = e.data.url;
      let type = e.data.type;
      setLogo(url)
    }
    window.addEventListener('message', MessageHandler)
    return () => {
      window.removeEventListener('message', MessageHandler)
    }
  }, [])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>LRDUI</title>
        <meta name="description" content="LRDUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} alt="" srcset="" />
      </main>
    </div>
  )
}
