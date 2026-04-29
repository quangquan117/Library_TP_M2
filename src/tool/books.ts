import type { Book } from '../interface/book'

export function getAvailableBooks(books: Book[]): Book[] {
    return books.filter(book => book.available);
}