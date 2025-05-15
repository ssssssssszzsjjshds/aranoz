import React from 'react'
import SecOne from './components/secOne/SecOne'
import SecTwo from './components/secTwo/SecTwo'
import SecThree from './components/secThree/SecThree'
import SecFour from './components/secFour/SecFour'
import SecFive from './components/secFive/SecFive'

const Home = () => {
  return (
    <div><SecOne /> <SecTwo /> <SecThree /><SecFour /> <SecFive /></div>
  )
}

export default Home