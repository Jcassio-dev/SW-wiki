import { AiOutlineSearch } from 'react-icons/ai'

export function Search({...rest}){
    return(
    <div className="desktop:w-80 mobile:w-40 flex items-center text-yellow-300 bg-black px-2 py-2 rounded-md gap-1 border border-yellow-300">
        <AiOutlineSearch className='text-lg'/>
        <input {...rest} type="text" className="text-yellow-300 w-full rounded-sm bg-black outline-none border-0 placeholder:text-yellow-700"/>
    </div>
    )
}