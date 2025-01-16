//happi in a nutshell
import happi, { Request, ResponseToolkit } from "@hapi/hapi";
import path from "path";
import { routes } from "./route";
import { log } from "console";

const initServer = async (): Promise<void> => {
  const server = happi.server({
    port: 1000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  if (server) {
    console.log("server hidup");
  }
};

try {
  initServer();
} catch (e) {
  console.error(e);
}
