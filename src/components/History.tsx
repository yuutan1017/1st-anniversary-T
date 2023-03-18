import { useState } from 'react'
import { motion } from 'framer-motion'
import '../scss/History.scss'

const monthCount = [...Array(12)].map((_, i) => i + 1)

export const History = (): JSX.Element => {

  // const hiddenImageFrame = (num: number) => {
  //   monthCount.forEach((idx) => {
  //     let ele: any = document.querySelector(`.image-frame:nth-child(${idx})`)
  //     if (num !== idx) {
  //       ele.style.visibility = 'hidden'
  //     }
  //   })
  // }

  const ImagesForMonth = () => (
    <>
      {monthCount.map((i : number) => (
        <motion.div
          id={i.toString()}
          key={i}
          className="image-frame"
          // onClick={() => hiddenImageFrame(i)}
        >
          <motion.img
            src={`tsukasa(4).jpeg`}
            alt="image"
            whileHover={{
              y: 14,
              x: 14,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
          />
          <div className="background"></div>
          <div className="month">
            <span>{i}</span>
          </div>
        </motion.div>
      ))}
    </>
  )

  return (
    <section>
      <div className="border"></div>
      <div className="headline">
        <h2>History</h2>
      </div>
      <div className="image-bg">
        <ImagesForMonth />
      </div>
    </section>
  )
}
