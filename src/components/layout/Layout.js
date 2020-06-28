import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <main className="text-gray-900">{children}</main>
        <Footer />
        </>
    )
}

export default Layout