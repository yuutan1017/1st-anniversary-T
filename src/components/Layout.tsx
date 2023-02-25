import '../scss/Layout.scss'


export const Layout = ({ children }: any): JSX.Element => {
  return (
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
  )
}
