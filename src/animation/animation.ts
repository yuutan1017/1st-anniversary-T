import gsap from 'gsap'

const headlineTexts = [
  '.text:nth-child(1)',
  '.text:nth-child(2)',
  '.text:nth-child(3)',
]

const stringSprit = (): void => {
  for (let i = 0; i < headlineTexts.length; i++) {
    const titleElement: any = document.querySelector(headlineTexts[i])
    const titleString: string[] = titleElement?.textContent?.split('')
    let outputs = ''
    titleString?.forEach((text: string) => (outputs += `<span>${text}</span>`))
    titleElement.innerHTML = outputs
  }
}

const openingAnimation = (): void => {
  stringSprit()

  const opening = gsap.timeline()

  const dots = ['.dot:nth-child(1)', '.dot:nth-child(2)', '.dot:nth-child(3)']
  const dotAnime_to = { y: -300, autoAlpha: 0 }
  const dotAnime_from = {
    y: 0,
    autoAlpha: 1,
    duration: 0.8,
    ease: 'Bounce.easeOut',
  }

  const headlineAnime_to = { y: 40, autoAlpha: 0 }
  const headlineAnime_from = {
    y: 0,
    autoAlpha: 1,
    delay: 0.1,
    stagger: {
      amount: 0.25,
      ease: 'sine.in',
    },
  }

  opening
    .fromTo(dots[0], dotAnime_to, dotAnime_from)
    .fromTo(dots[1], dotAnime_to, dotAnime_from)
    .fromTo(dots[2], dotAnime_to, {
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
        autoAlpha: 0,
        duration: 0.8,
        delay: 1,
      }
    )
    .fromTo(`${headlineTexts[0]} > span`, headlineAnime_to, headlineAnime_from)
    .fromTo(`${headlineTexts[1]} > span`, headlineAnime_to, headlineAnime_from)
    .fromTo(`${headlineTexts[2]} > span`, headlineAnime_to, headlineAnime_from)
    .fromTo('.border', { autoAlpha: 0, x: -200 }, { autoAlpha: 1, x: 0 })
    .fromTo('.headline > h2', { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0 })
    .fromTo(
      '.image-frame',
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, stagger: 0.15 }
    )
}

export default openingAnimation
