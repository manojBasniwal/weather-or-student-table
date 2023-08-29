import Navbar from 'components/navbar'
import React from 'react'

function PageWidthNavbar(props) {
  return (
    <>
      <Navbar/>
      {props.children}
    </>
  )
}

export default PageWidthNavbar
