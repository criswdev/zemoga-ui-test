import css from './index.styl'

import React from 'react'

import Text from '../Text'
import VoteBar from '../VoteBar'
import Thumb from '../Thumb'
import Button from '../Button'

const importAll = require =>
require.keys().reduce((acc, next) => {
  acc[next.replace("./", "")] = require(next);
  return acc;
}, {});

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      voted: false,
      thumbSelected: '',
      up: Number(props.thumbsUp),
      down: Number(props.thumbsDown)
    }

    this.handleThumbsDown = this.handleThumbsDown.bind(this)
    this.handleThumbsUp = this.handleThumbsUp.bind(this)
    this.handleVote = this.handleVote.bind(this)
    this.handleVoteAgain = this.handleVoteAgain.bind(this)
  }

  handleThumbsUp() {
    this.setState({ thumbSelected: 'up' })
  }

  handleThumbsDown() {
    this.setState({ thumbSelected: 'down' })
  }

  handleVote() {
    const thumb = this.state.thumbSelected
    if (!thumb) return
     
    this.setState({
      [thumb]: Number(this.state[thumb]) + 1,
      voted: true
      })
  }

  handleVoteAgain() {
    this.setState({ voted: false, thumbSelected: '' })
  }

  render() {
    const {character, img, openTime, category, description} = this.props
    const { up, down, voted, thumbSelected } = this.state

    const totalThumbs = up + down
    const percentajeUp = Math.floor((totalThumbs * up) / 100)
    const percentajeDown = Math.floor((totalThumbs * down) / 100)

    const bgStyle = {
      backgroundImage: `url(${img})`,
    }
    return (
      <div className={css.card} style={bgStyle}>
        <div className={css.cardContent}>
          <Text tag="div" variant="cardTitle" className={css.title}>
            <div className={css.thumbsState}>
              <Thumb variant={up > down && "up"} thumbStyle="small"/>
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
              <Button onClick={this.handleVoteAgain}>Vote again</Button>
            )
            : (
              <React.Fragment>
                <Button selected={thumbSelected === 'up'} variant="up" onClick={this.handleThumbsUp}/>
                <Button selected={thumbSelected === 'down'} variant="down" onClick={this.handleThumbsDown}/>
                <Button onClick={this.handleVote}>Vote now</Button>
              </React.Fragment>
            )
            }
          </div>
        </div>
        <VoteBar variant="results" up={percentajeUp} down={percentajeDown}/>
      </div>
    )
  }
}

export default Card
