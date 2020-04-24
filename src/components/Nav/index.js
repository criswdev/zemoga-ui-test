import css from './index.styl'

import React from 'react'
import Text from '../Text'

const Nav = () => {
  return (
    <nav className={css.nav}>
      <ul>
        <li><Text variant="header">Past Trials</Text></li>
        <li><Text variant="header">How It Works</Text></li>
        <li><Text variant="header">Log In / Sign Up</Text></li>
      </ul>
    </nav>
  )
}

export default Nav