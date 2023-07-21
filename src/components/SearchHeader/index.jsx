import { Search } from "../Search"

export function SearchHeader({title, ...rest}){
    return(
        <div className='w-full my-4 flex items-center justify-between animate-left'>
          <h1 className='desktop:text-3xl mobile:text-xl font-bold text-yellow-300'>{title}</h1>
          <Search {...rest}/>
        </div>
    )
}