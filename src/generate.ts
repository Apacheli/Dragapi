import { getEndpoints } from "./get_endpoints.ts";

const camel = (str: string) => str.replace(/-(\w)/g, (_, x) => x.toUpperCase());
const pascal = (str: string) => str[0].toUpperCase() + camel(str.substring(1));

const endpoints = await getEndpoints();

let imports = "import type {\n";
let methods = "";

for (const key in endpoints) {
  const name = camel(key);
  const type = pascal(key);

  imports += `  ${type},\n`;
  methods +=
    `\nexport const get${type}List = (query?: PaginationOptions): Promise<NamedAPIResourceList<${type}>> => request("${key}", query);\n\n`;
  methods +=
    `export const get${type} = (${name}: Identifier): Promise<${type}> => request(\`${key}/\${${name}}\`)\n`;
}

await Deno.writeTextFile(
  "./_generated.ts",
  `${imports}} from "./resources/mod.ts";\n\nexport type Identifier = string | number;\n${methods}`,
);

console.log("Generated.");
