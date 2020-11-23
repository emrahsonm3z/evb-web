import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

function Figure({ src, title, alt, address }) {
  return (
    <div className={styles.grid}>
      <figure className={styles.effect}>
        {/* <img src={src} alt={alt} className={styles['img-fluid']} /> */}
        <Image
          src={src}
          alt={alt}
          className={styles['img-fluid']}
          layout="fill"
        />
        <figcaption>
          <div className={styles.caption}>
            <h2>{title}</h2>
            <p>{address}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default Figure
