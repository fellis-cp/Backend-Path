import hapi from "@hapi/hapi";
import { log } from "console";
import { routes } from "./route";

const initServer = async (): Promise<void> => {
  const server = hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`server start in ${server.info.uri}`);
};
initServer();
