const camel = (str: string) => str.replace(/-(\w)/g, (_, x) => x.toUpperCase());
const pascal = (str: string) => str[0].toUpperCase() + camel(str.slice(1));

const response = await fetch("https://pokeapi.co/api/v2");

const endpoints = await response.json();

let imports = "import type {\n";
let str = "";
for (const key in endpoints) {
  const a = camel(key);
  const b = pascal(key);
  imports += `  ${b},\n`;
  str +=
    `\nexport const ${a}List = (query?: PaginationOptions): Promise<NamedAPIResourceList<${b}>> => request("${key}", query);\n\n`;
  str +=
    `export const ${a} = (${a}: Identifier): Promise<${b}> => request(\`${key}/\${${a}}\`);\n`;
}

await Deno.writeTextFile(
  "./_generated.ts",
  `${imports}} from \"./resources/mod.ts\";\n\nimport { request } from "./request.ts";\n\nexport type Identifier = string | number;\n${str}`,
);

console.log("Done.");
