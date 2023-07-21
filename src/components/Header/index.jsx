import Emblem from '../../assets/emblem.svg';

import { GiLightSabers } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaSpaceShuttle } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';

import { Link } from 'react-router-dom';

export function Header({page}){
    return(
        <header className="bg-black flex items-center justify-between px-5 py-5 text-white font-medium border-b border-gray-800">
            <Link to="/"><img src={Emblem} alt="Emblema do império galático" className='w-12 h-12'/></Link>

            <nav className='desktop:flex tablet:flex items-center gap-5 mobile:hidden'>
                <Link to='/characters' className={`flex items-center gap-1.5 transition duration-300 cursor-pointer hover:text-yellow-300 pb-2 ${page == 1 && 'border-b-4 border-yellow-300 mt-1'}`}>
                    <BsPersonCircle className='text-2xl'/> <p className='mb-1 text-xl'>Personagens</p>
                </Link>
                <Link className={`flex items-center gap-1.5 transition duration-300 cursor-pointer hover:text-yellow-300 pb-2 ${page == 2 && 'border-b-4 border-yellow-300'}`}>
                    <GiLightSabers className='text-2xl'/> <p className='mb-1 text-xl'>Armas</p>
                </Link>
                <Link to='/starships' className={`flex items-center gap-0.5 transition duration-300 cursor-pointer hover:text-yellow-300 pb-2 ${page == 3 && 'border-b-4 border-yellow-300'}`}>
                    <FaSpaceShuttle className='text-2xl -rotate-90'/> <p className='mb-1 text-xl'>Naves</p>
                </Link>
            </nav>

            <button className='flex items-center content-center gap-2 border border-gray-700 px-3 py-3 text-base rounded-md transition duration-500 hover:bg-yellow-300 hover:text-black'>
                <p className='mb-1'>Login</p> <AiOutlineLogin className='text-lg'/>
            </button>
        </header>
    )
}