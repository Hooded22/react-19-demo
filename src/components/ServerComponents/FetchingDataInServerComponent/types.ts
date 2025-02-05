export interface Note {
    id: number;        // Unique identifier for the note
    authorId: number;  // Identifier of the author of the note
    content: string;   // Content of the note
}

export interface Author {
    id: number;        // Unique identifier for the author
    name: string;      // Name of the author
}