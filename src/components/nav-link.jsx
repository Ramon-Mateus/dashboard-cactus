export function NavLink(props) {
    return (
        <a {...props} className='font-medium text-sm'>
            {props.children}
        </a>
    )
}