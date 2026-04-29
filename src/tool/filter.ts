import type { Book } from '../interface/book';

export function filterBooksByAvailability(books: { [id: string]: Book }, available: string): { [id: string]: Book } {
    switch (available.toLowerCase()) {
        case 'available':
            return Object.fromEntries(Object.entries(books).filter(([_, book]) => book.available));
        case 'unavailable':
            return Object.fromEntries(Object.entries(books).filter(([_, book]) => !book.available));
        default:
            return books;
    }
}