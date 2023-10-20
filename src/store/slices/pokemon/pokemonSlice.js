import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
       page: 0,
       pokemons: [],
       isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;

            // Esto ultimo es para que se vea asi:
                /* {
                        page: 1,
                        pokemons: []
                } */
            
        }
    }
});


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;