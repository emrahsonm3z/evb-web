import React from 'react'
import cn from 'classnames'

import styles from './index.module.css'

function Card({ title, className, children }) {
  return (
    <div className={cn([styles.card, className])}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.body}> {children}</div>
      </div>
    </div>
  )
}

export default Card
