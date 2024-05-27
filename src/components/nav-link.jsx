export function NavLink(props) {
    return (
        <a {...props} className='text-2xl font-bold text-gray-900'>
            <h1>{props.children}</h1>
        </a>
    )
}