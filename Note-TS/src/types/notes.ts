type _NotesRequest = {
  title: string;
  tags: string;
  body: string;
};

interface Note {
  title?: string;
  tags?: string;
  body?: string;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

type _NotesPutRequest = {
  title: string;
  tags: string;
  body: string;
};

export { _NotesRequest, Note, _NotesPutRequest };
