export function ClienteRow(props) {
    return ( 
        <div className='flex justify-between'>
            <span className='font-medium text-gray-700'>{props.title}</span>
            <span className='text-gray-900' >{props.data}</span>
        </div>
    )
}