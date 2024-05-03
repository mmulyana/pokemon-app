export default function Pokemon({ pokemon }) {
    return (
        <div className="p-3 border border-gray-100 rounded-lg h-fit">
            <img src={pokemon.image} alt={pokemon.name} className="h-40 w-auto object-cover block mx-auto" />
            <p className="mt-3 text-lg text-gray-800 font-medium">{pokemon.name}</p>
            <div className="mt-2">
                <p className="text-sm font-semibold text-gray-500">Special Attacks</p>
                <div className="space-y-2 space-x-2 md:space-x-0 mt-1.5">
                    {pokemon.attacks.special.map((attack) => <span key={`${attack.name}-${attack.damage}`} className="px-2 py-0.5 bg-purple-200 text-purple-600 inline-block rounded text-sm">
                        {attack.name}
                    </span>)}
                </div>
            </div>
        </div>
    )
}