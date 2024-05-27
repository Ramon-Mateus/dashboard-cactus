import CactusLogo from '../assets/cactus_logo.jpg'
import { NavLink } from './nav-link'

export function Header() {
    return (
        <div className='flex items-center py-2'>

           <nav className='flex items-center gap-4'>
                <img className="size-8" src={CactusLogo} />
                <NavLink href='/'>Dashboard de Clientes</NavLink>
           </nav>

        </div>
    )
}