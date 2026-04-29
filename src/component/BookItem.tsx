import type { Book } from '../interface/book'

export function PrintBookDetails({ book }: { book: Book }) {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Available: {book.available ? 'Yes' : 'No'}</p>
        </div>
    )
}