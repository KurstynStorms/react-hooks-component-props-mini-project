import React from "react"

const Article = ({blogTitle="January 1, 1970", blogDate, blogPreview}) => {
  return (
      <article>
            <h3 key={blogTitle}> {blogTitle}</h3>
            <small key={blogDate}>{blogDate}</small>
            <p key={blogPreview}>{blogPreview}</p>
      </article>
  )
}

export default Article