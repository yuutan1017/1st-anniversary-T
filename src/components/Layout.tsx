import gsap from 'gsap'

import { Header } from './Header'
import { Footer } from './Footer'

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
        duration: 1.5,
        delay: 1,
      }
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
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
