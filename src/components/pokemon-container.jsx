import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import Pokemon from "./pokemon";

export default function PokemonContainer() {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: { first: 10 }
    })

    if (loading) return <p>loading...</p>
    if (error) return <p>error: {error.message}</p>

    console.log(data)

    return (
        <div className="py-10 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {!!data && data?.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}