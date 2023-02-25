import { CurtainAnimation } from './components/CurtainAnimation'
import { Layout } from './components/Layout'
import { History } from './components/History'

import openingAnimation from './animation/animation'

window.addEventListener('load', () => {
  openingAnimation()
})

const App = () => {
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
