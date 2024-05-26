import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ClientDetail() {
    const param = useParams();
    const [cliente, setClient] = useState({})
    const [id, setId] = useState(param.id)
    
    useEffect(() => {
        const url = new URL(`http://localhost:3333/findManyCliente/${id}`)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(JSON.parse(data))
                setClient(JSON.parse(data))
             })
     }, [id])

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl'>
                <div className='mb-4 flex flex-row justify-between'>
                    <h1 className='text-2xl font-bold text-gray-800'>Detalhes do Cliente</h1>
                    <Link to='/' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>
                        Voltar para Home
                    </Link>
                </div>
                <div className='space-y-4'>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>ID:</span>
                        <span className='text-gray-900'>{cliente.id}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Status Cliente:</span>
                        <span className='text-gray-900'>{cliente.statusCliente ? 'Ativo' : 'Inativo'}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>IP Concentrador:</span>
                        <span className='text-gray-900'>{cliente.ipConcentrador}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Nome Concentrador:</span>
                        <span className='text-gray-900'>{cliente.nomeConcentrador}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Latitude Cliente:</span>
                        <span className='text-gray-900'>{cliente.latitudeCliente}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Longitude Cliente:</span>
                        <span className='text-gray-900'>{cliente.longitudeCliente}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Conexão Inicial:</span>
                        <span className='text-gray-900'>{cliente.conexaoInicial}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Conexão Final:</span>
                        <span className='text-gray-900'>{cliente.conexaoFinal}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Tempo Conectado:</span>
                        <span className='text-gray-900'>{cliente.tempoConectado} minutos</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Consumo Download:</span>
                        <span className='text-gray-900'>{cliente.consumoDownload} bytes</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Consumo Upload:</span>
                        <span className='text-gray-900'>{cliente.consumoUpload} bytes</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Motivo Desconexão:</span>
                        <span className='text-gray-900'>{cliente.motivoDesconexao}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>POP Cliente:</span>
                        <span className='text-gray-900'>{cliente.popCliente}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Nome Cliente:</span>
                        <span className='text-gray-900'>{cliente.nomeCliente}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Endereço Cliente:</span>
                        <span className='text-gray-900'>{cliente.enderecoCliente}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Bairro Cliente:</span>
                        <span className='text-gray-900'>{cliente.bairroCliente}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Cidade Cliente:</span>
                        <span className='text-gray-900'>{cliente.cidadeCliente}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Plano Contrato:</span>
                        <span className='text-gray-900'>{cliente.planoContrato}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Status Internet:</span>
                        <span className='text-gray-900'>{cliente.statusInternet}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-700'>Valor Plano:</span>
                        <span className='text-gray-900'>R$ {cliente.valorPlano}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}