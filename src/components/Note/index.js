import css from './index.styl'

import React from 'react'
import Text from '../Text'

const Note = () => {
  return (
    <div className={css.note}>
      <div>
        <Text variant="mediumCard">Speak out. Be heard.</Text>
        <Text variant="mediumTextBold">Be counted</Text>
      </div>
      <div>
        <Text tag="p" variant="noteText" className={css.text}>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</Text>
      </div>
      <div>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="15px" height="16px">
          <path fillRule="evenodd"  fill="rgb(51, 51, 51)"
          d="M15.010,14.487 L14.318,15.176 L7.828,8.706 L0.696,15.815 L-0.010,15.111 L7.122,8.003 L0.632,1.534 L1.323,0.845 L7.813,7.314 L13.968,1.179 L14.674,1.883 L8.519,8.017 L15.010,14.487 Z"/>
        </svg>
      </div>
    </div>
  )
}

export default Note