import { Request, ResponseToolkit, ServerRoute } from "@hapi/hapi";
import joi from "joi";

const routes: ServerRoute[] = [
  {
    method: "POST",
    path: "/login",
    options: {
      validate: {
        payload: joi.object({
          id: joi.string().required(),
          pw: joi.string().required(),
        }),
      },
    },
    handler: (req: Request, res: ResponseToolkit) => {
      const { id, pw } = req.payload as { id: string; pw: string };
      if (id && pw) {
        return res
          .response({
            message: "berhasil login",
            id,
            pw,
          })
          .code(200);
      }
    },
  },
];

export { routes };
