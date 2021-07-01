import React from "react"

const Header = ({blogName}) => {
  console.log(blogName)
  return (
    <header>
      <h1>{blogName}</h1>
    </header>
   )
}

export default Header