import gsap from 'gsap'
import './scss/Layout.scss'

window.addEventListener('load', function () {
  const opening = gsap.timeline()
  const dots = [
    document.querySelector('.dot > span:nth-child(1)'),
    document.querySelector('.dot > span:nth-child(2)'),
    document.querySelector('.dot > span:nth-child(3)'),
  ]
  const start = { y: -150, autoAlpha: 0 }
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
      document.querySelector('.curtain'),
      {
        y: 0,
        opacity: 1,
      },
      {
        z: 100,
        opacity: 0,
        duration: 1,
        delay: 1,
      }
    )
    .fromTo(
      document.querySelector('.header-text'),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.3 }
    )
})

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="layout">
      <div className="curtain">
        <div className="dot">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
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
  )
}
