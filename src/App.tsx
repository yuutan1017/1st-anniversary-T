import { Layout } from './components/Layout'
import { History } from './components/History'

import openingAnimation from './animation/animation'

const App = () => {
  window.addEventListener('load', () => {
    openingAnimation()
  })

  return (
    <>
      <Layout>
        <History />
      </Layout>
    </>
  )
}

export default App
