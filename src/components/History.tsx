import '../scss/History.scss'

const monthCount = [...Array(12)].map((_, i) => i + 1)

export const History = (): JSX.Element => {
  const ImagesForMonth = (): JSX.Element => (
    <>
      {monthCount.map((i) => (
        <div key={i} className="image">
          <img src={`tsukasa(4).jpeg`} alt="image" />
          <div className="month">
            <span>{i}</span>
          </div>
        </div>
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
