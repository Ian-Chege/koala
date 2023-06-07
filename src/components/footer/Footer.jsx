import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container}>©2023 Koala Project. All rights reserved.</div>
        <div className={styles.cite}>
          Design Inspired by LamaDev.
        </div>
    </div>
  )
}

export default Footer