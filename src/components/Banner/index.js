import css from './index.styl'

import React from 'react'
import BannerCard from '../BannerCard'
import ClosingBlock from '../ClosingBlock'

const Banner = () => {
  return (
    <div className={css.banner}>
      <BannerCard/>
      <ClosingBlock/>
    </div>
  )
}

export default Banner
