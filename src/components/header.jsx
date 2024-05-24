import { NavLink } from './nav-link'

export function Header() {
    return (
        <div className='flex items-center gap-5 py-2'>

           <nav className='flex items-center gap-5'>
                <NavLink href='/Clientes'></NavLink>
           </nav>
        </div>
    )
}