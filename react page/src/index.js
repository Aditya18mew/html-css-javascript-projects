import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import { books } from "./books" // || export function name(){}
// sexond way to import/* import bulma from "./books" || export default books */
import {Book} from "./book"



function Booklist(){
return <> 
   <header>Best Selling Books</header>
   <section className="booklist">
    {books.map((book,index)=>{
  return <Book {...book}  key={book.id} number={index}></Book>
})}
  </section></> 
}



const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Booklist></Booklist>)
