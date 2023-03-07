import { useEffect } from 'react'

import { Layout } from './components/Layout'
import { History } from './components/History'
import { CurtainAnimation } from './components/CurtainAnimation'
import { Leaf } from './components/Leaf'

import openingAnimation from './animation/animation'

const App = () => {
  useEffect(() => {
    openingAnimation()
  })

  return (
    <>
      <CurtainAnimation />
      <Leaf />
      <Layout>
        <History />
      </Layout>
    </>
  )
}

export default App
