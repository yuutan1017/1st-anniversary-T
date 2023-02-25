import { Layout } from './components/Layout'

import './App.scss'

const App = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="image-bg">
            <div className="image">
              <img src="../public/tsukasa(1).jpeg" alt="image" />
            </div>
          </div>
          {/* <div className="image-bg">
            <div className="image">
              <img src="../public/tsukasa(2).jpeg" alt="image" />
            </div>
          </div>
          <div className="image-bg">
            <div className="image">
              <img src="../public/tsukasa(3).jpeg" alt="image" />
            </div>
          </div> */}
        </section>
      </Layout>
    </>
  )
}

export default App
