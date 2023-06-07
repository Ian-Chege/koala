import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero1.png'
import Button from '@components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Bringing to the user the ultimate tech experience.
        </h1>
        <p className={styles.desc}>
        Innovation and Empathy for better solutions.
        </p>
        <Button url="/portfolio" text="Explore our projects" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>  
  )
}
