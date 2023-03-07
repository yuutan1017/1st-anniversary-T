import { useEffect } from 'react'

import { Layout } from './components/Layout'
import { History } from './components/History'
import { CurtainAnimation } from './components/CurtainAnimation'
import { Bubble } from './components/Bubble'

import openingAnimation from './animation/animation'

const App = () => {
  useEffect(() => {
    openingAnimation()
  })

  return (
    <>
      <CurtainAnimation />
      <Bubble />
      <Layout>
        <History />
      </Layout>
    </>
  )
}

export default App
