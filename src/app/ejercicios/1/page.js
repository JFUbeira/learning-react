// https://pokeapi.co/api/v2/pokemon/
const baseUrl = 'https://pokeapi.co/api/v2'
async function Ejercicio1Page() {
    // esto se puede hacer aca porque estamos usando Next.js
    // entonces tenemos habilitados los React Server Components

    // fetch pokemons
    const response = await fetch(`${baseUrl}/pokemon`)
    const data = await response.json()
    const { results } = data

    // agarro 5
    const pokemons = results.slice(0, 5)

    // fetch pokemon
    // const fetchPokemon = async (url) => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     return data
    // }
    /**
     * Yo me quiero armar un objeto como este recorriendo el array de pokemons
     * {
     *   id: number,
     *   name: string,
     *   experience: number
     * }
     */
    const pokemonsToRender = pokemons.map(async (pokemon, i) => {
        const response = await fetch(pokemon.url)
        const pokemonData = await response.json()

        const { name } = pokemon
        const {
            base_experience: experience,
            sprites: { front_default: image },
        } = pokemonData

        return {
            id: i + 1,
            name,
            image,
            experience,
        }
    })

    const pokemonsData = await Promise.all(pokemonsToRender)

    return (
        <div className="flex flex-col gap-4 p-4">
            {pokemonsData.map((pokemon) => (
                <div
                    key={pokemon.name}
                    className="border rounded-lg flex justify-center items-center w-[400px] gap-4"
                >
                    <img src={pokemon.image} alt="" />

                    <div>
                        <h1 className="text-2xl capitalize">{pokemon.name}</h1>
                        <p>{pokemon.experience}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Ejercicio1Page
