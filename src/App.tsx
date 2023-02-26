import { useEffect } from 'react'

import { Layout } from './components/Layout'
import { History } from './components/History'
import { CurtainAnimation } from './components/CurtainAnimation'

import openingAnimation from './animation/animation'

const App = () => {
  useEffect(() => {
    openingAnimation()
    console.log('animation start')
  })

  return (
    <>
      <CurtainAnimation />
      <Layout>
        <History />
      </Layout>
    </>
  )
}

export default App
