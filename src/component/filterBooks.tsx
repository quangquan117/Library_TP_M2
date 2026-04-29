import { useState, useEffect } from 'react';
import type { Book } from '../interface/book';
import { filterBooksByAvailability } from '../tool/filter';

export function FilterBooksSelect({books, setTempBooks}: { books: { [id: string]: Book };setTempBooks: (books: { [id: string]: Book }) => void; }) {
    const [available, setavailable] = useState<string>('all');

    useEffect(() => {
        setTempBooks(filterBooksByAvailability(books, available));
    }, [available, books, setTempBooks]);

    return (
        <select value={available} onChange={(e) => setavailable(e.target.value)} name="disponibilité"
            id="disponibilité"
        >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    );
}