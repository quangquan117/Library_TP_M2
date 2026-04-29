import { useState } from 'react'
import './App.css'
import type { Book } from './interface/book'
import { PrintBookDetails } from './component/BookItem'

function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: false },
    { id: 3, title: '1984', author: 'George Orwell', available: true },
  ])


  return (
    <>
      <h1>Library Management System</h1>
      {books.map((book) => (
        <PrintBookDetails book={book} />
      ))}
    </>
  )
}

export default App
