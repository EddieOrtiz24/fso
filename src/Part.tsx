import React from 'react'

const Part = (props) => {

    const {part, exercises} = props;

  return (
    <div>
        <p>
            {part} {exercises}
        </p>
    </div>
  )
}

export default Part
