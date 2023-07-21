export function ItemCard({title, section,info1, info2, icon: Icon}){
    return(
        <div className="w-64 p-5 flex flex-col border rounded-md cursor-pointer transition duration-500 mx-auto hover:bg-yellow-300 hover:text-black hover:-translate-y-2">
            <h2 className="text-xl font-bold border-b flex items-center gap-1">{Icon && <Icon/>}{title}</h2>
            <h3 className="text-lg font-medium">{section}</h3>
            <p>{info1}</p>
            <p>{info2}</p>
        </div>
    )
}