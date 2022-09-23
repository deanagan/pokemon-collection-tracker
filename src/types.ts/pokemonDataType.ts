type PokemonDataType = {
  uniqueId: string;
  name: string;
  trainer: string;
};

type PokemonDataSearchType = {
  uniqueId: string | null;
  name: string | null;
  trainer: string | null;
};

export { PokemonDataType, PokemonDataSearchType };
