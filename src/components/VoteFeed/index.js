import css from './index.styl'

import React from 'react'
import Text from '../Text'
import Card from '../Card'

import data from '../data.json'

const VoteFeed = () => {
  return (
    <section>
      <Text variant="bodyBigLight">Previous Rulings</Text>
      <div className={css.voteFeed}>
        {data.map((character, idx) => {
          return (
            <Card
              key={idx}
              character={character.name}
              img={character.img}
              openTime={character.openTime}
              category={character.category}
              description={character.description}
              thumbsUp={character.thumbsUp}
              thumbsDown={character.thumbsDown}
            />
          )
        })}
      </div>
    </section>
  )
}

export default VoteFeed
