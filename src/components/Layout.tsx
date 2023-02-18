import React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'
import './scss/Layout.scss'

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
