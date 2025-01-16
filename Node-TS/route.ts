import happi, { Request, ResponseToolkit } from "@hapi/hapi";
import path from "path";

const routes: any = [
  {
    method: "GET",
    path: "/",
    handler: (req: Request, res: ResponseToolkit) => {
      return "home";
    },
  },

  {
    method: "POST",
    path: "/about",
    handler: (req: Request, res: ResponseToolkit) => {
      return "about";
    },
  },

  {
    method: "GET",
    path: "/redirect",
    handler: (req: Request, res: ResponseToolkit) => {
      return res
        .response({
          message: " this is json res",
        })
        .code(200);
    },
  },
];

export { routes };
