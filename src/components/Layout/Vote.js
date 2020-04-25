import css from './Vote.styl'

import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner'
import Note from '../Note'
import VoteFeed from '../VoteFeed'
import Footer from '../Footer'

const importAll = require =>
require.keys().reduce((acc, next) => {
  acc[next.replace("./", "")] = require(next);
  return acc;
}, {});
importAll(require.context("../../images/characters/", false, /\.(png|svg)$/))
importAll(require.context("../../images/", false, /\.(png|svg)$/))

const Vote = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <div className={css.content}>
        <Note/>
        <VoteFeed/>
        <Footer/>
      </div>
    </>
  )
}

export default Vote
