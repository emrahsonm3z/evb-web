import React from 'react'
import styles from './index.module.css'

function SubTitle({ title }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.border}></div>
      </div>
    </div>
  )
}

export default SubTitle
