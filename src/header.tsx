import React from 'react'

const Header = (props) => {

    const {course} = props

  return (
    <nav>
      <h1>{course}</h1>
    </nav>
  )
}

export default Header
