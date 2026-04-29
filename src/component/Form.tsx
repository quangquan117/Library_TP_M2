export function Form({ hidden, onSubmit }: { hidden: boolean; onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
    return (
        <form hidden={hidden} onSubmit={onSubmit}>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Author" />
            <button type="submit">Add Book</button>
        </form>
    )
}