import hapi from "@hapi/hapi";
import { routes } from "./routes";

const init = async (): Promise<void> => {
  const server = hapi.server({
    port: "5000",
    host: "localhost",
    routes: {
      cors: {
        origin: [`*`],
      },
    },
  });

  server.route(routes);

  await server.start();

  console.log(`server start at ${server.info.uri}`);
};

init();
