export function ItemCard({title, info1, info2}){
    return(
        <div className="w-64 p-5 flex flex-col border rounded-md cursor-pointer transition duration-500 mx-auto hover:bg-yellow-300 hover:text-black hover:-translate-y-2">
            <h2 className="text-2xl font-medium border-b">{title}</h2>
            <p>{info1}</p>
            <p>{info2}</p>
        </div>
    )
}