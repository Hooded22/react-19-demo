import { Author, Note } from "./types"

const notes: Note[] = [
    {
        "id": 1,
        "authorId": 1,
        "content": "This is the content of note 1"
    },
    {
        "id": 2,
        "authorId": 2,
        "content": "This is the content of note 2"
    },
    {
        "id": 3,
        "authorId": 3,
        "content": "This is the content of note 3"
    }
]

const authors: Author[] = [
    {
        "id": 1,
        "name": "Author One"
    },
    {
        "id": 2,
        "name": "Author Two"
    },
    {
        "id": 3,
        "name": "Author Three"
    }
]

export async function getAllNotes(): Promise<Note[]> {
    return notes;
}



async function getNoteById(id: number): Promise<Note> {
    return new Promise((res, reject) => {
        const note = notes.find(note => note.id === id)

        if (!note) {
            return reject(new Error("Not found"))
        }

        res(note)
    })
}

async function getAuthorById(id: number): Promise<Author> {
    return new Promise((res, reject) => {
        const author = authors.find(author => author.id === id)

        if (!author) {
            return reject(new Error("Not found"))
        }

        res(author)
    })
}