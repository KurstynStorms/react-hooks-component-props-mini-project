import React from "react"

const Article = ({blogTitle="January 1, 1970", blogDate, blogPreview}) => {
  return (
      <article>
            <h3>{blogTitle}</h3>
            <small>{blogDate}</small>
            <p>{blogPreview}</p>
      </article>
  )
}

export default Article