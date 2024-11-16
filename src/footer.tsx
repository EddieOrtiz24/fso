import React from 'react'

const Footer = (props) => {

    const {exercises1, exercises2, exercises3} = props

  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default Footer
