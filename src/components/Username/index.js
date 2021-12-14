import React from 'react'

function UserName({ firstName, lastName }) {
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  )
}

export default UserName
