import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
export type PokemonTypes =
  | "fire"
  | "grass"
  | "steel"
  | "water"
  | "psychic"
  | "ground"
  | "ice"
  | "flying"
  | "ghost"
  | "normal"
  | "poison"
  | "rock"
  | "fighting"
  | "dark"
  | "bug"
  | "dragon"
  | "electric"
  | "fairy"
  | "shadow"
  | "unknow";

export const enum PokemonType {
  fire = "fire",
  grass = "grass",
  steel = "steel",
  water = "water",
  psychic = "psychic",
  ground = "ground",
  ice = "ice",
  flying = "flying",
  ghost = "ghost",
  normal = "normal",
  poison = "poison",
  rock = "rock",
  fighting = "fighting",
  dark = "dark",
  bug = "bug",
  dragon = "dragon",
  electric = "electric",
  fairy = "fairy",
  shadow = "shadow",
  unknow = "unknow",
}

export function matherType(type: PokemonTypes) {
  switch (type) {
    case "bug":
      return PokemonType.bug;
    case "dark":
      return PokemonType.dark;
    case "dragon":
      return PokemonType.dragon;
    case "electric":
      return PokemonType.electric;
    case "fairy":
      return PokemonType.fairy;
    case "fighting":
      return PokemonType.fighting;
    case "flying":
      return PokemonType.flying;
    case "ghost":
      return PokemonType.ghost;
    case "grass":
      return PokemonType.grass;
    case "ground":
      return PokemonType.ground;
    case "ice":
      return PokemonType.ice;
    case "normal":
      return PokemonType.normal;
    case "poison":
      return PokemonType.poison;
    case "psychic":
      return PokemonType.psychic;
    case "rock":
      return PokemonType.rock;
    case "shadow":
      return PokemonType.shadow;
    case "steel":
      return PokemonType.steel;
    case "unknow":
      return PokemonType.unknow;
    case "water":
      return PokemonType.water;
    case "fire":
    default:
      return PokemonType.fire;
  }
}

export const TypeArray: PokemonTypes[] = [
  "fire",
  "grass",
  "steel",
  "water",
  "psychic",
  "ground",
  "ice",
  "flying",
  "ghost",
  "normal",
  "poison",
  "rock",
  "fighting",
  "dark",
  "bug",
  "dragon",
  "electric",
  "fairy",
  "shadow",
  "unknow",
];

export const filterPokemonType = (
  pokemonArr: GetPokemonProps[],
  type: PokemonTypes
) => {
  return pokemonArr.filter((p) => p.types.find((t) => t.type.name === type));
};
