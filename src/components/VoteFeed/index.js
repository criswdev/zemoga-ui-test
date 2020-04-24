import css from './index.styl'

import React from 'react'
import Text from '../Text'
import Card from '../Card'

const VoteFeed = () => {
  return (
    <section>
      <Text variant="bodyBigLight">Previous Rulings</Text>
      <div className={css.voteFeed}>
        <Card
          character="Kanye West"
          img="kanye.png"
          openTime="1 month ago"
          category="Entertainment"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          thumbsUp="64"
          thumbsDown="36"
        />
        <Card
          character="Mark Zuckerberg"
          img="mark.png"
          openTime="1 month ago"
          category="Business"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          thumbsUp="36"
          thumbsDown="64"
          voted
        />
        <Card
          character="Cristina Fernández de Kirchner"
          img="cristina.png"
          openTime="1 month ago"
          category="Politics"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          thumbsUp="36"
          thumbsDown="64"
        />
        <Card
          character="Malala Yousafzai"
          img="malala.png"
          openTime="1 month ago"
          category="Entertainment"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          thumbsUp="64"
          thumbsDown="36"
        />
      </div>
    </section>
  )
}

export default VoteFeed
