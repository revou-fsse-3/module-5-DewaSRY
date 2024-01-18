import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import ErrorFetching from "@libs/Error";
import { GetAllPokemon, FetchPokemonByName } from "@libs/pokemon";
const pokemonInitValue = {
  allPokemon: [] as GetPokemonProps[],
  isLoading: false,
  error: null as null | ErrorFetching,
  _offset: 0,
  _limited: 50,
};
type Actions = {
  getMorePokemon: () => Promise<void>;
  setError: (e: ErrorFetching) => void;
  setLoading: (val: boolean) => void;
};
type State = typeof pokemonInitValue;
const StatePokemon = create<State & Actions>()(
  immer((set) => ({
    ...pokemonInitValue,
    setError: (e) => {
      set((s) => {
        s.error = e;
      });
    },
    setLoading: (value) => {
      set((s) => {
        s.isLoading = value;
      });
    },
    getMorePokemon: async () => {
      const state = StatePokemon.getState();
      set((s) => {
        s.isLoading = true;
      });
      try {
        const pokemonNames = await GetAllPokemon(state._limited, state._offset);
        const allPokemon = await FetchPokemonByName(pokemonNames);
        set((s) => {
          s.allPokemon = [...s.allPokemon, ...allPokemon];
        });
        set((s) => {
          s._offset = s._offset + s._limited;
        });
      } catch (er) {
        if (er instanceof ErrorFetching) {
          set((s) => {
            s.error = er as ErrorFetching;
          });
        }
      } finally {
        set((s) => {
          s.isLoading = false;
        });
      }
    },
  }))
);
export default StatePokemon;
export { pokemonInitValue };
