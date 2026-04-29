import type { Book } from '../interface/book'

export function PrintBookDetails({ book, onToggleAvailability, id }: { book: Book; onToggleAvailability: (id: string) => void; id: number }) {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Available: {book.available ? 'Yes' : 'No'}</p>
            <button onClick={() => onToggleAvailability(id.toString())}>
                {book.available ? 'Mark as Unavailable' : 'Mark as Available'}
            </button>
        </div>
    )
}