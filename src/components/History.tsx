import { motion } from 'framer-motion'
import '../scss/History.scss'

const monthCount = [...Array(12)].map((_, i) => i + 1)

export const History = (): JSX.Element => {
  const ImagesForMonth = (): JSX.Element => (
    <>
      {monthCount.map((i) => (
        <motion.div key={i} className="image-frame">
          <motion.img
            src={`tsukasa(4).jpeg`}
            alt="image"
            whileHover={{
              y: 14,
              x: 14,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
            whileTap={{
              y: 14,
              x: 14,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
          />
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
