import type { Book } from '../interface/book'

export function ButtonAvailable({ book, onToggle }: { book: Book; onToggle: () => void }) {
    return (
        <button onClick={onToggle}>
            {book.available ? 'Mark as Unavailable' : 'Mark as Available'}
        </button>
    )
}