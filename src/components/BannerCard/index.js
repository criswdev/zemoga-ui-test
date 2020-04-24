import css from './index.styl'

import React from 'react'
import VoteBar from '../VoteBar'
import Text from '../Text'

import wiki from '../../images/wiki.png'

const BannerCard = () => {
  return (
    <div className={css.bannerCardContainer}>
      <div className={css.bannerCard}>
        <div>
          <Text className={css.smallText}>What’s your opinion on</Text>
          <Text tag="h2" variant="heading2">Pope Francis?</Text>
          <Text tag="p" variant="mediumCard" className={css.cardText}>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </Text>
          <div className={css.moreInfo}>
            <img src={wiki} className={css.wiki}/>
            <a><Text variant="smallTextLight">More information</Text></a>
          </div>
          <Text variant="bodySmallBold" className={css.veredict}>What’s Your Verdict?</Text>
        </div>
      </div>
      <VoteBar/>
    </div>
  )
}

export default BannerCard
