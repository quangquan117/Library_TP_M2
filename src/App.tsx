import { useState } from 'react'
import './App.css'
import type { Book } from './interface/book'

function App() {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState<Book[]>([])

  return (
    <>
      
    </>
  )
}

export default App
