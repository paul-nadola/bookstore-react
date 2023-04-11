import React from 'react'

const clickHandler = (e) => {
  console.log(e)
  console.log(e.target)
  alert('THANK YOU FOR YOUR PURCHASE!.' )
}
const complexExample = (author) =>{
  alert(`the author is ${author}`)
}
const Book =({img, alt, title, author}) => {
  // const {img, alt, title, author} = props
  return (<article className="book" onMouseOver={() => {
    console.log(title)
  }}>
  <img src= {img} alt={alt}/>
  <h1>{title}</h1>
  <h4>{author}</h4>
  <button type = "button" onClick={clickHandler}>BUY</button>
  <button type="button" onClick={() => complexExample(author)}>COMPLEX</button>
</article>)
}

export default Book