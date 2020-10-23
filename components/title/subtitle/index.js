import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'

function SubTitle({ title, className }) {
  return (
    <div className={cn([styles.section, className])}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.border}></div>
      </div>
    </div>
  )
}

export default SubTitle
