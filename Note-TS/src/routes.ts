import { ServerRoute } from "@hapi/hapi";
import { ResponseToolkit } from "hapi";
import {
  addNoteHandler,
  getAllnotesHandler,
  getnotesBody,
  getnotesId,
  putNotesId,
} from "./handler";

const routes: ServerRoute[] = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },

  {
    method: "GET",
    path: "/notes",
    handler: getAllnotesHandler,
  },

  {
    method: "GET",
    path: "/notes/{id}",
    handler: getnotesId,
  },

  {
    method: "PUT",
    path: "/notes/{id}",
    handler: putNotesId,
  },

  {
    method: "GET",
    path: "/notes/body/{id}",
    handler: getnotesBody,
  },
];

export { routes };
