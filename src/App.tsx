import { useEffect } from 'react'

import { Layout } from './components/Layout'
import { History } from './components/History'
import { CurtainAnimation } from './components/CurtainAnimation'
import { Balloon } from './components/Balloon'

import openingAnimation from './animation/animation'

const App = () => {
  useEffect(() => {
    openingAnimation()
  })

  return (
    <>
      <CurtainAnimation />
      {/* <Balloon /> */}
      <Layout>
        <History />
      </Layout>
    </>
  )
}

export default App
