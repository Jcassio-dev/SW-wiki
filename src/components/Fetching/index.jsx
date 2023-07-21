import logo from '../../assets/emblem.svg'

export function Fetching(){
    return(
        <div className='w-9/12 mx-auto mt-28 mb-3 flex flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl font-bold text-yellow-300 text-center'>Os dados estão vindo de uma galáxia muito, muito distante...</h1>
            <img src={logo} alt="Logo girando" className='animate-spin w-20 h-20'/>
      </div>  
    )
}