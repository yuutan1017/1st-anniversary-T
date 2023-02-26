import { Layout } from './components/Layout'
import { History } from './components/History'

import openingAnimation from './animation/animation'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    openingAnimation()
    console.log("animation start")
  })
  // openingAnimation()

  return (
    <>
      <Layout>
        <History />
      </Layout>
    </>
  )
}

export default App
