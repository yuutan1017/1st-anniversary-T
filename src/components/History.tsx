/// History.tsx : 実装
//

import { useState } from 'react'
import { motion } from 'framer-motion'
import '../scss/History.scss'

// const _monthCount = [...Array(12)].map((_, i) => i + 1)
const monthCount = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]

export const History = (): JSX.Element => {
  const ImagesForMonth = () => (
    <>
      {monthCount.map((i : number) => (
        <motion.div
          id={i.toString()}
          key={i}
          className="image-frame"
        >
          <motion.img
            src={`2023\\tsukasa_${i}.jpeg`}            
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
