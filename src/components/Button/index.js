
import css from './index.styl'

import React from 'react'
import classNames from 'classnames'

import Text from '../Text'
import Thumb from '../Thumb'


const Button = ({variant, children, selected, ...props}) => {
  let content = children
  let style = css.button
  if(variant === 'up') {
    content = <Thumb variant="up"/>
    style = selected ? css.selected : ''
  } else if (variant === "down") {
    content = <Thumb variant="down"/>
    style = selected ? css.selected : ''
  }
  return (
    <button className={classNames(css.base, style)} {...props}>
      {content}
    </button>
  )
}

export default Button
