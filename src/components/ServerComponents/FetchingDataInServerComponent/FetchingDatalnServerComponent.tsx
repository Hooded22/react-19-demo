import { getAllNotes } from "./api"

export async function FetchingDatalnServerComponent() {
    const notes = await getAllNotes()
    return (
        <div>
            {notes.map(note => (
                <p>{note.content}</p>
            ))}
        </div>
    )
}