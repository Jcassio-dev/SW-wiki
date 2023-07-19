import { AiOutlineSearch } from 'react-icons/ai'

export function Search({...rest}){
    return(
    <div className="w-9/12 flex items-center text-black bg-white px-2 py-2 rounded-md gap-1 mx-auto my-4">
        <AiOutlineSearch className='text-lg'/>
        <input {...rest} type="text" className="text-black w-full rounded-sm bg-white outline-none border-0"/>
    </div>
    )
}