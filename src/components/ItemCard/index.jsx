export function ItemCard({title, section1, section2,  info1, info2, info3, info4, icon: Icon}){
    return(
        <div className="w-64 p-5 flex flex-col border rounded-md cursor-pointer transition duration-500 mx-auto hover:bg-yellow-300 hover:text-black hover:-translate-y-2">
            <h2 className="text-xl font-bold border-b flex items-center gap-1">{Icon && <Icon/>}{title}</h2>
            <h3>{section1}</h3>
            <p>{info1}</p>
            <p>{info2}</p>
            <h3>{section2}</h3>
            <p>{info3}</p>
            <p>{info4}</p>
        </div>
    )
}