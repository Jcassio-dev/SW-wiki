import {emblem} from '../../assets/emblem.svg'

export function Header(){
    return(
        <header className="bg-gray-900 flex-row items-center justify-between px-20 py-30">
            <img src={emblem} alt="Emblema do império galático" />
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button>
                Login
            </button>
        </header>
    )
}