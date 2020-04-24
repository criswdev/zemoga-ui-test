import css from './index.styl'

import React from 'react'
import Thumb from '../Thumb'
import Text from '../Text'

const VoteBar = ({variant, up, down}) => {
  let styleUp = {}
  let styleDown = {}
  
  if(up) {
    styleUp = { width: up + '%' }
  }

  if(down) {
    styleDown = { width: down + '%' }
  }

  return (
    <div className={css.voteBar}>
      <div className={css.thumbBar} style={{...styleUp}}>
        <Thumb variant="up">
        {variant === "results" &&
          <Text variant="percentaje" className={css.percentaje}>{up}%</Text>
        }
        </Thumb>
      </div>
      <div className={css.thumbBar} style={{...styleDown}}>
        <Thumb>
          {variant === "results" &&
            <Text variant="percentaje" className={css.percentaje}>{down}%</Text>
          }
        </Thumb>
      </div>
    </div>
  )
}

export default VoteBar
