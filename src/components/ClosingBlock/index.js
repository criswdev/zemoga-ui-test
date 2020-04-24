import css from './index.styl'

import React from 'react'
import Text from '../Text'

const ClosingBlock = () => {
  return (
    <div className={css.closingBlock}>
      <Text tag="div" variant="smallTextLight" color="light" className={css.title}>CLOSING IN</Text>
      <Text tag="div" variant="mediumText" className={css.days}><strong>22</strong> days</Text>
    </div>
  )
}

export default ClosingBlock
