import { twMerge } from "tailwind-merge";

export function TableCell(props) {
    return (
        <td {...props} className={twMerge('py-3 px-4 text-sm text-gray-900', props.className)}/>
    )
}