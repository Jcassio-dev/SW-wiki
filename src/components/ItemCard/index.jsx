export function ItemCard({title, height, mass}){
    return(
        <div className="w-64 p-5 flex flex-col border rounded-md cursor-pointer transition duration-300 mx-auto hover:bg-yellow-300 hover:text-black hover:border-black">
            <h2 className="text-2xl font-medium border-b">{title}</h2>
            <p>Altura: {height/100} m</p>
            <p>Peso: {mass} KG</p>
        </div>
    )
}