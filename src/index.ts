import "reflect-metadata";
import Server from "./internal/server";
import { container } from "tsyringe";

const server = container.resolve(Server);

server.create();
