import css from './index.styl'

import React from 'react'
import classNames from 'classnames'

import Img from 'react-image'

const Thumb = ({variant, thumbStyle, children}) => {
  return (
    <div className={classNames(css.base, css[variant], css[thumbStyle], { [css.hasChildren]: children })}>
      <Img src={variant === 'up' ? 'thumb-up.svg' : 'thumb-down.svg'}/>
      {children}
    </div>
  )
}

export default Thumb
