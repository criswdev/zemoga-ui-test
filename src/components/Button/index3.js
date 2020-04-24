
import css from './index.styl'

import React from 'react'
import Text from '../Text'

import thumbDown from '../../images/thumb-down.svg'

const Button3 = () => {
  return (
    <button className={css.button3}>
     <img src={thumbDown}/>
    </button>
  )
}

export default Button3
