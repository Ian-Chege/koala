'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ]

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Image alt='logo' src='/koala.jpg' height={60} width={60} style={{borderRadius:'40% / 50%'}}/>
        {/* <Link href="/" className={styles.logo}>Koala</Link>  */}
        <div className={styles.links}>
            {links.map((link) =>(
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </Link>
            ))}
            <button className={styles.logout} onClick={()=>{
              console.log('logged out')
            }}>Log out</button>
        </div>       
    </div>
  )
}

export default Navbar