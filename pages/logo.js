import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
function Logo() {
  const [logo, setLogo] = useState()

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
  

  return (logo &&
    <div className={styles.container}>

      <main className={styles.main}>
        <Image src={logo} alt="" srcset="" />
      </main>
    </div>
  )
}

export default Logo