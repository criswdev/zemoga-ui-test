
import css from './index.styl'

import React from 'react'
import Text from '../Text'

import thumbUp from '../../images/thumb-up.svg'

const Button2 = () => {
  return (
    <button className={css.button2}>
     <img src={thumbUp}/>
    </button>
  )
}

export default Button2
