
import css from './index.styl'

import React from 'react'
import Text from '../Text'

const Button = () => {
  return (
    <button className={css.button}>
      <Text>Vote now</Text>
    </button>
  )
}

export default Button
