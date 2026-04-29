import { useState } from "react"
import { Form } from "./Form"
import type { Book } from '../interface/book'

export function AddBook({Books, setBooks}: {Books: { [id: string]: Book }, setBooks: React.Dispatch<React.SetStateAction<{ [id: string]: Book }>>}) {
    const [showForm, setShowForm] = useState(false)
    const onClickAddBook = () => {
        setShowForm(!showForm)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowForm(false)
        const newBook: Book = {
            id: Date.now(),
            title: (e.currentTarget.elements[0] as HTMLInputElement).value,
            author: (e.currentTarget.elements[1] as HTMLInputElement).value,
            available: true
        }
        setBooks({...Books, [Date.now().toString()]: newBook})
    }

    return (
        <>
            <button onClick={onClickAddBook}>Add Book</button>
            <Form hidden={!showForm} onSubmit={onSubmit} />
        </>
    )
}