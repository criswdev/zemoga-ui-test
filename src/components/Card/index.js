import css from './index.styl'

import React from 'react'

import Text from '../Text'
import Thumb from '../Thumb'
import Button from '../Button'
import VoteBar from '../VoteBar'
import Button2 from '../Button/index2'
import Button3 from '../Button/index3'
import Button4 from '../Button/index4'

export class Card extends React.Component {
  state = {
    voted: null
  }

  componentDidMount () {
    importAll(require.context("../../images/characters/", false, /\.(png|jpe?g|svg)$/))
  }

  importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next)
      return acc
  }, {})

  render () {
    const {character, img, openTime, category, description, thumbsUp, thumbsDown, voted} = this.props
    const bgStyle = {
      backgroundImage: `url(${img})`,
    }
    console.warn(bgStyle)
    return (
      <div className={css.card} style={bgStyle}>
        <div className={css.cardContent}>
          <Text tag="div" variant="cardTitle" className={css.title}>
            <div className={css.thumbsState}>
              <Thumb variant={thumbsUp > thumbsDown && "up"} thumbStyle="small"/>
            </div>
            {character}
          </Text>
          <div className={css.time}>
              <Text variant="extraSmallTextBold">{openTime}&nbsp;</Text>
              <Text variant="extraSmallText">in {category}</Text>
            </div>
          <Text tag="p" className={css.description}>{voted ? 'Thank you for voting!' :description}</Text>
          <div className={css.cardButtons}>
            {voted
            ? (
              <Button4/>
            )
            : (
              <React.Fragment>
                <Button2/>
                <Button3/>
                <Button/>
              </React.Fragment>
            )
            }
          </div>
        </div>
        <VoteBar variant="results" up={thumbsUp} down={thumbsDown}/>
      </div>
    )
  }
}

export default Card