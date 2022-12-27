import React from 'react'

import * as styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.overlay}>{children}</div>
    </div>
  )
}

export default Layout
