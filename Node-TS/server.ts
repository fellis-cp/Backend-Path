import hapi from "@hapi/hapi";
import { log } from "console";
import { routes } from "./route";

const initServer = async (): Promise<void> => {
  const server = hapi.server({
    port: 3000,
  });

  server.route(routes);

  await server.start();
  console.log("server start");
};

initServer();
