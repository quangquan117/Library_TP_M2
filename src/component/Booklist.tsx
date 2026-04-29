import type { Book } from '../interface/book'
import { PrintBookDetails } from './BookItem'

export function PrintAllBooks({books, onToggleAvailability}: {books: Book[], onToggleAvailability: (id: string) => void}) {
    return (<>
          {books.map((book) => (
            <PrintBookDetails book={book} onToggleAvailability={onToggleAvailability} id={book.id} />
          ))}
        </>)
}