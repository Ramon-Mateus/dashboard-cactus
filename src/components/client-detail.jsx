import { useParams } from "react-router-dom";

export function ClientDetail() {
    const param = useParams();
    
    console.log(param)

    return (
        <div className=''>
            <p>Página de detail {param.id}</p>
        </div>
    )
}