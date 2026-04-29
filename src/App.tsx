import { useState } from 'react'
import './App.css'
import type { Book } from './interface/book'
import { PrintAllBooks } from './component/Booklist'
import { AddBook } from './component/AddBook'
import { FilterBooksSelect } from './component/filterBooks'
function App() {
  const [books, setBooks] = useState<{ [id: string]: Book }>({
    "1" :{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
    "2" :{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: false },
    "3" :{ id: 3, title: '1984', author: 'George Orwell', available: true },
  })
  const [tempBooks, setTempBooks] = useState<{ [id: string]: Book }>(books)

  const onToggleAvailability = (id: string) => {
    setBooks(prevBooks => ({
      ...prevBooks,
      [id]: {
        ...prevBooks[id],
        available: !prevBooks[id].available
      }
    }))
  }


  return (
    <>
      <h1>Library Management System</h1>
      <AddBook Books={books} setBooks={setBooks} />
      <FilterBooksSelect books={books} setTempBooks={setTempBooks} />
      <PrintAllBooks books={Object.values(tempBooks)} onToggleAvailability={onToggleAvailability} />
    </>
  )
}

export default App
