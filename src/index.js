import React from "react";
import ReactDOM from "react-dom";
//CSS
import './index.css';

import {books} from './books'

import Book from "./Book";

// function Greeting(){//react component
//   return (
//     <h1>Hi i'm Nadola</h1>
//   )
// }
// function Greeting(){//nesting components inside other react components
//   return (<div>
//   <Shout/>
//   <Message/>
//   </div>)
// }
// const Shout = () => <h1>HELLO WORLD!!!!!</h1>
// const Message = () => {
//   return <h4>This is Nadola and this is my first component......</h4>
// }
// ReactDOM.render(<Greeting/>, document.getElementById('root'));


//CSS
// function Booklist(){
//   return (<section className="booklist">
//  <Book/>
//  <Book/>
//  <Book/>
//  <Book/>
//  <Book/>
//  <Book/>
//  <Book/>
//   </section>)
// }
// const Book = () => {
//   return (<article className="book">
//     <Image />
//     <Title />
//     <Author />
//     </article>)
// }
// const Image = () => <img src= "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" alt="book cover"/>
// const Title = () => <h1>I Love You to the Moon and Back</h1>
// const Author = () => <h4>by Amelia Hepworth </h4>

// function Booklist(){//another way
//   return (<section className="booklist">
//  <Book/>
//   </section>)
// }
// const Book = () => {
  
//   return (<article className="book">
//   <img src= "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" alt="book cover"/>
//   <h1>I Love You to the Moon and Back</h1>
//   <h4>by Amelia Hepworth </h4>
//     </article>)
// }
// const title = 'I Love You to the Moon and Back' 
// const author = 'by Amelia Hepworth '
// const img = "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" 
// const alt="book cover"
// function Booklist(){//another one --- DJ Khalled
//   return (<section className="booklist">
//  <Book/>
//   </section>)
// }
// const Book = () => {
//   return (<article className="book">
//   <img src= {img} alt={alt}/>
//   <h1>{title}</h1>
//   <h4>{author}</h4>
//     </article>)
// } //same instance

// ReactDOM.render(<Booklist/>, document.getElementById('root'));

// const title = 'I Love You to the Moon and Back'
// const author = 'by Amelia Hepworth '
// const img = "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" 
// const alt="book cover"
// function Booklist(){//another one --- DJ Khalled * different instances
//   return (<section className="booklist">
//  <Book job = 'developer'/>
//  <Book title = 'rando' number = {22}/>
//   </section>)
// }
// const Book = (props) => {
//   console.log(props)
//   return (<article className="book">
//   <img src= {img} alt={alt}/>
//   <h1>{title}</h1>
//   <h4>{author}</h4>
//   <p>{props.job}</p>
//   <p>{props.title}</p>
//   <p>{props.number}</p>
// </article>)
// }

// ReactDOM.render(<Booklist/>, document.getElementById('root'));
// const firstBook = {

//   title : 'I Love You to the Moon and Back',
//   author :'by Amelia Hepworth ',
//   img :"https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" ,
//   alt:"book cover"
// }
// const secondBook = {

//   title : 'Flirt',
//   author :'by Adriana Locke',
//   img :"https://m.media-amazon.com/images/I/61npNg0U8HL._AC_UL400_.jpg" ,
//   alt:"book cover"
// }
// function Booklist(){//another one --- DJ Khalled * different instances
//   return (<section className="booklist">
//  <Book img = {firstBook.img}
//   alt = {firstBook.alt}
//   title = {firstBook.title}
//   author = {firstBook.author}/>
//  <Book img = {secondBook.img}
//   alt = {secondBook.alt}
//   title = {secondBook.title}
//   author = {secondBook.author}/>
//   </section>)
// }
// const Book = (props) => {

//   return (<article className="book">
//   <img src= {props.img} alt={props.alt}/>
//   <h1>{props.title}</h1>
//   <h4>{props.author}</h4>

// </article>)
// }
//ReactDOM.render(<Booklist/>, document.getElementById('root'));
// const firstBook = {

//   title : 'I Love You to the Moon and Back',
//   author :'by Amelia Hepworth ',
//   img :"https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" ,
//   alt:"book cover"
// }
// const secondBook = {

//   title : 'Flirt',
//   author :'by Adriana Locke',
//   img :"https://m.media-amazon.com/images/I/61npNg0U8HL._AC_UL400_.jpg" ,
//   alt:"book cover"
// }
// function Booklist(){//another one --- DJ Khalled * different instances
//   return (<section className="booklist">
//  <Book img = {firstBook.img}
//   alt = {firstBook.alt}
//   title = {firstBook.title}
//   author = {firstBook.author}>
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime sequi deleniti, quas incidunt illo! Explicabo molestias repellat sit illo nobis saepe fuga eaque ab ipsa eum, earum nihil distinctio.

//     </p>
//   </Book>
//  <Book img = {secondBook.img}
//   alt = {secondBook.alt}
//   title = {secondBook.title}
//   author = {secondBook.author}/>
//   </section>)
// }
// const Book =/* ({img, alt, title, author, children})or */(props) => {
//   const {img, alt, title, author, children} = props //--- parameter to props
//   return (<article className="book">
//   <img src= {img} alt={alt}/>
//   <h1>{title}</h1>
//   <h4>{author}</h4>
//   {children}

// </article>)
// }
// ReactDOM.render(<Booklist/>, document.getElementById('root'));

// const books = [{
//   id: 1,
//   title : 'I Love You to the Moon and Back',
//   author :'by Amelia Hepworth ',
//   img :"https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" ,
//   alt:"book cover"
// },
// {
//   id: 2,
//   title : 'Flirt',
//   author :'by Adriana Locke',
//   img :"https://m.media-amazon.com/images/I/61npNg0U8HL._AC_UL400_.jpg" ,
//   alt:"book cover"
// },
// {
//   id: 3,
//   title : 'Where the Crawdads Sing',
//   author :'by Delia Owens, Cassandra Campbell, et al.',
//   img :"https://m.media-amazon.com/images/I/91pW1-pwF0L._AC_UL400_.jpg" ,
//   alt:"book cover"
// }
// ];
// function Booklist(){//another one --- DJ Khalled * different instances
//   return (<section className="booklist">{books.map((book) =>{
   
//   return <Book key = {book.id} book = {book}></Book>
//   })}
//   </section>)
// }
// const Book =(props) => {
//   const {img, alt, title, author} = props.book
//   return (<article className="book">
//   <img src= {img} alt={alt}/>
//   <h1>{title}</h1>
//   <h4>{author}</h4>
// </article>)
// }
// ReactDOM.render(<Booklist/>, document.getElementById('root'));

// const books = [{
//   id: 1,
//   title : 'I Love You to the Moon and Back',
//   author :'by Amelia Hepworth ',
//   img :"https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" ,
//   alt:"book cover"
// },
// {
//   id: 2,
//   title : 'Flirt',
//   author :'by Adriana Locke',
//   img :"https://m.media-amazon.com/images/I/61npNg0U8HL._AC_UL400_.jpg" ,
//   alt:"book cover"
// },
// {
//   id: 3,
//   title : 'Where the Crawdads Sing',
//   author :'by Delia Owens, Cassandra Campbell, et al.',
//   img :"https://m.media-amazon.com/images/I/91pW1-pwF0L._AC_UL400_.jpg" ,
//   alt:"book cover"
// }
// ];
// function Booklist(){//spread operator
//   return (<section className="booklist">{books.map((book) =>{
   
//   return <Book key = {book.id} {...book}></Book>
//   })}
//   </section>)
// }
// const Book =(props) => {
//   const {img, alt, title, author} = props
//   return (<article className="book">
//   <img src= {img} alt={alt}/>
//   <h1>{title}</h1>
//   <h4>{author}</h4>
// </article>)
// }
// ReactDOM.render(<Booklist/>, document.getElementById('root'));

//EVENTS

function Booklist(){//spread operator
  return (<section className="booklist">{books.map((book) =>{
   
  return <Book key = {book.id} {...book}></Book>
  })}
  </section>)
}// ALSO IMPORT EXPORT STATEMENTS

ReactDOM.render(<Booklist/>, document.getElementById('root'));