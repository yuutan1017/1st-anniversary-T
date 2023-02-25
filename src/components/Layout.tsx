import gsap from 'gsap'
import '../scss/Layout.scss'

const openingAnimation = () => {
  const opening = gsap.timeline()
  const dots = [
    '.dots > span:nth-child(1)',
    '.dots > span:nth-child(2)',
    '.dots > span:nth-child(3)',
  ]
  const start = { y: -300, autoAlpha: 0 }
  const end = {
    y: 0,
    autoAlpha: 1,
    duration: 0.8,
    ease: 'Bounce.easeOut',
  }

  opening
    .fromTo(dots[0], start, end)
    .fromTo(dots[1], start, end)
    .fromTo(dots[2], start, {
      y: 350,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'Expo.easeOut',
    })
    .to(dots[2], { y: 0, duration: 0.8, ease: 'Elastic.easeOut' })
    .fromTo(
      '.curtain',
      {
        y: 0,
        autoAlpha: 1,
      },
      {
        y: '-100%',
        // autoAlpha: 0,
        duration: 0.8,
        delay: 1,
      }
    )
    .fromTo(
      '.header-text',
      { y: -40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.2, delay: 0.3 }
    )
}

window.addEventListener('load', () => {
  openingAnimation()
})

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <div className="curtain">
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="layout">
        <header>
          <div className="header-text">
            <p className="text">1st</p>
            <p className="text">Anniversary</p>
            <p className="text">Tsukasa</p>
            <div className="milky"></div>
          </div>
        </header>
        <main className="main">{children}</main>
        <footer className="footer-container">
          <span className="footer-text">
            &copy; 2023 Yuta N. All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  )
}
