import '../scss/Layout.scss'

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="layout">
      <header>
        <div className="header-text">
          <div className="text">1st</div>
          <div className="text">Anniversary</div>
          <div className="text">Tsukasa</div>
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
