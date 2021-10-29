# dragapi

Deno bindings for [PokéAPI](https://pokeapi.co/).

See the generated documentation [here](https://doc.deno.land/https/github.com/apacheli/dragapi/raw/dev/mod.ts).

## Example

Make sure to enable `--allow-net`.

```ts
import { getPokemon } from "https://github.com/apacheli/dragapi/raw/dev/mod.ts";

const input = prompt("Enter the ID or name of a Pokémon:");
if (!input) {
  throw new Error("No input!");
}

const pokemon = await getPokemon(input);
console.log(pokemon);
```
