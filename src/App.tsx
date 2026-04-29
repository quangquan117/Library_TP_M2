import { useState } from 'react'
import './App.css'
import type { Book } from './interface/book'
import { PrintAllBooks } from './component/Booklist'
function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: false },
    { id: 3, title: '1984', author: 'George Orwell', available: true },
  ])


  return (
    <>
      <h1>Library Management System</h1>
      <PrintAllBooks books={books} />
    </>
  )
}

export default App
