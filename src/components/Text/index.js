import css from './index.styl'

import React from 'react'
import classNames from 'classnames'

const Text = ({tag, variant, color, className, children}) => {
  const TextTag = tag || 'span'

  return (
    <TextTag className={classNames(css.base, css[variant], css[color], className)}>
      {children}
    </TextTag>
  )
}

export default Text
