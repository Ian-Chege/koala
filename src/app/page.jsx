import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero1.png'

export default function Home() {
  return (
    <div className={styles.cointainer}>
      <Image src={Hero} alt='' className={styles.img} />
    </div>
  )
}
