import { request } from "./request.ts";

export const getEndpoints = (): Promise<Record<string, string>> => request("");
