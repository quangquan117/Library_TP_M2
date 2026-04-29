import type { Book } from '../interface/book'
import { PrintBookDetails } from './BookItem'

export function PrintAllBooks({books} : {books: Book[]}) {
    return (<>
          {books.map((book) => (
            <PrintBookDetails book={book} />
          ))}
        </>)
}