import React, { useState } from 'react';
import axios from 'axios';

// Functional Component w/ destructoring props 
const PokemonButton = (props) => {
    const [pokemon, setPokemon] = useState(null);

    // Using Axios to handle the action of the button click when calling on API 
    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => {
                setPokemon(res.data.results);
            })
            .catch(err => console.log(err))
        }

    // // Handles the action of the button click when calling on API 
    // const fetchPokemon = (event) => {
    //     // Fetching the pokemon API
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=964&offset=0")
    //         // Return the API data as JSON data
    //         .then ( (response) => {return response.json();})
    //         // Send JSON data to setPokemon to set state
    //         .then ( (response) => {
    //             setPokemon(response.results)})
    //         //Handles any errors
    //         .catch ( (error) => {console.log(error);});
    // }

    // Handles the display of fetch API data
    const displayPokemon = () => {
        if (pokemon === null){
            return(
                <li>"Let's catch them ALL!!!"</li>
            )
        }
        else{
            // Use map to cycle through all Pokemon 
            return(pokemon.map( (pokemon, idx) => {
                return (<li key={idx}>{idx+1}: {pokemon.name}</li>);
            }))
        }
    }

    return (
        <>
            {/* Using fetchPokemon as button action  */}
            <button onClick={fetchPokemon}>Fetch Pokémon!</button>
            <ul>
                <h4>Pokémon</h4>
                {displayPokemon()}
            </ul>
        </>
    )
}

export default PokemonButton;