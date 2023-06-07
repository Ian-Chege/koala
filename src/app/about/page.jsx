import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

import Button from '@components/Button/Button'
import AboutImg from 'public/about.jpg'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={AboutImg}
          alt='about image'
          className={styles.img}
          fill={true}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            At Koala Project, we are passionate about pushing the boundaries of what is possible. Our portfolio showcases our innovative and next-level projects that demonstrate our commitment to excellence in software development.
            <br />
            <br />
            We believe that by combining our passion for innovation with our commitment to excellence, we can achieve great things.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We specialize in developing cutting-edge web applications and Android mobile platform solutions.
            <br />
            <br /> - Web Application Development: We create dynamic and responsive web applications that are tailored to meet the unique needs of our clients. 
            <br />
            <br /> - Android Mobile Platform Development: Developing high-quality Android mobile applications that are fast, handy, and easy to use.
            <br />
            <br /> 
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About