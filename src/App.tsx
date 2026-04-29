import { useState } from 'react'
import './App.css'
import type { Book } from './interface/book'
import { PrintAllBooks } from './component/Booklist'
import { AddBook } from './component/AddBook'
function App() {
  const [books, setBooks] = useState<{ [id: string]: Book }>({
    "1" :{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
    "2" :{ title: 'To Kill a Mockingbird', author: 'Harper Lee', available: false },
    "3" :{ title: '1984', author: 'George Orwell', available: true },
  })


  return (
    <>
      <h1>Library Management System</h1>
      <AddBook Books={books} setBooks={setBooks} />
      <PrintAllBooks books={Object.values(books)} />
    </>
  )
}

export default App
