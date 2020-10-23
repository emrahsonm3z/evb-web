import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'

export function ListItem({ title, value }) {
  return (
    <div className={styles['item']}>
      <span className={styles.bullet}></span>
      <div className={styles['content']}>
        <span className={styles.field}>{title}</span>
        <span className={styles.value}>
          {value instanceof File ? value.name : value}
        </span>
      </div>
    </div>
  )
}

function List({ className, children }) {
  return (
    <div className={cn([styles.block, className])}>
      <div className={styles['body']}>{children}</div>
    </div>
  )
}

export default List
