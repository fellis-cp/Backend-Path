import { Request, ResponseToolkit } from "hapi";
import { nanoid } from "nanoid";
import { _NotesPutRequest, _NotesRequest, Note } from "./types/notes";
import { note } from "./note";

const addNoteHandler = (req: Request, res: ResponseToolkit) => {
  const { title, tags, body } = req.payload as _NotesRequest;
  const id: string = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNotes: Note = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  note.push(newNotes);
  const isSucces: boolean = note.filter((note) => note.id === id).length > 0;
  if (isSucces) {
    const sResponse = res.response({
      status: "succes",
      message: `data berhasil ditambahkan`,
      data: {
        noteid: id,
      },
    });
    sResponse.code(201);
    return sResponse;
    console.log("data added");
  } else {
    const fResponese = res.response({
      status: "failed",
      message: "gagal memasukan",
    });
    fResponese.code(500);
    return fResponese;
  }
};

const getAllnotesHandler = (req: Request, res: ResponseToolkit) => ({
  status: "succes",
  data: {
    note,
  },
});

const getnotesId = (req: Request, res: ResponseToolkit) => {
  const { id } = req.params;
  const noteId = note.filter((n) => n.id === id);

  if (note !== undefined) {
    return {
      status: "succes",
      data: {
        noteId,
      },
    };
  } else {
    const failRes = res.response({
      status: "failed",
      message: "notfoud",
    });
    failRes.code(404);
    return failRes;
  }
};

const putNotesId = (req: Request, res: ResponseToolkit) => {
  const { id } = req.params as { id: string };
  const updatedAt = new Date().toISOString();
  const { title, tags, body } = req.payload as _NotesPutRequest;

  const putID = note.findIndex((note) => note.id === id);

  if (putID !== -1) {
    note[putID] = {
      ...note[putID],
      title,
      tags,
      body,
      updatedAt,
    };

    const sResponse = res.response({
      status: "succes",
      message: "changing notes succes",
    });
    sResponse.code(200);
    return sResponse;
  } else {
    const fResponese = res.response({
      status: "failed",
      message: "failed changing notes",
    });
    fResponese.code(404);
    return fResponese;
  }
};

const getnotesBody = (req: Request, res: ResponseToolkit) => {
  const { id } = req.params;
  const noteBody = note.find((n) => n.id === id);

  if (!noteBody) {
    const fResponse = res.response({
      status: "failed",
      message: "id not found",
    });
    fResponse.code(404);
    return fResponse;
  }

  return {
    status: "success",
    data: {
      body: noteBody.body,
    },
  };
};

export {
  getnotesBody,
  putNotesId,
  addNoteHandler,
  getAllnotesHandler,
  getnotesId,
};
