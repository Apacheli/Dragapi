import { getEndpoints } from "./request.ts";

const camel = (str: string) => str.replace(/-(\w)/g, (_, x) => x.toUpperCase());
const pascal = (str: string) => str[0].toUpperCase() + camel(str.substring(1));

const endpoints = await getEndpoints();

let methods = "";

for (const key in endpoints) {
  const name = camel(key);
  const type = pascal(key);

  methods +=
    `export const get${type} = (${name}: string | number) => request<${type}>(\`/${key}/\${${name}}\`);\n\n`;
  methods +=
    `export const get${type}List = (query?: PaginationOptions) => request<NamedAPIResourceList<${type}>>("/${key}", query);\n\n`;
}

await Deno.writeTextFile("./src/mod.ts", methods);
