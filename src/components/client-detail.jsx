import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { ClienteRow } from "./client-detail-row";

export function ClientDetail() {
    const param = useParams();
    const [cliente, setClient] = useState({})
    const [id] = useState(param.id)

    const data = new Date(cliente.conexaoInicial);
    const dataFormatada = data.toLocaleString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const statusInternetMap = {
        0: "Desconhecido",
        1: "Ativo",
        2: "Desativado",
        3: "Bloqueio Manual",
        4: "Bloqueio Automático",
        5: "Financeiro em Atraso",
        6: "Aguardando Assinatura"
    };

    const navigate = useNavigate();

    const returnPage = () => {
        navigate(-1)
    }

    useEffect(() => {
        const url = new URL(`http://localhost:3333/findManyCliente/${id}`)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setClient(JSON.parse(data))
             })
     }, [id])

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl'>
                <div className='mb-4 flex flex-row justify-between'>
                    <h1 className='text-2xl font-bold text-gray-800'>Detalhes do Cliente</h1>
                    <button onClick={returnPage} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>
                        Voltar para Home
                    </button>
                </div>
                <div className='space-y-4'>
                    <ClienteRow title="ID:" data={cliente.id} />
                    <ClienteRow title="Status Cliente:" data={cliente.statusCliente ? 'Online' : 'Offline'} />
                    <ClienteRow title="Nome Cliente:" data={cliente.nomeCliente} />
                    <ClienteRow title="Cidade Cliente:" data={cliente.cidadeCliente} />
                    <ClienteRow title="Bairro Cliente:" data={cliente.bairroCliente} />
                    <ClienteRow title="Endereço Cliente:" data={cliente.enderecoCliente == '' ? 'Não cadastrado' : cliente.enderecoCliente} />
                    <ClienteRow title="Plano Contrato:" data={cliente.planoContrato} />
                    <ClienteRow title="Valor Plano:" data={formatadorMoeda.format(cliente.valorPlano)} />
                    <ClienteRow title="IP Concentrador:" data={cliente.ipConcentrador} />
                    <ClienteRow title="Nome Concentrador:" data={cliente.nomeConcentrador} />
                    <ClienteRow title="Consumo Download:" data={cliente.consumoDownload} />
                    <ClienteRow title="Consumo Upload:" data={cliente.consumoUpload} />
                    <ClienteRow title="Latitude Cliente:" data={cliente.latitudeCliente} />
                    <ClienteRow title="Longitude Cliente:" data={cliente.longitudeCliente} />
                    <ClienteRow title="Conexão Inicial:" data={dataFormatada} />
                    <ClienteRow title="Conexão Final:" data={cliente.conexaoFinal ?? 'Não cadastrado'} />
                    <ClienteRow title="Tempo Conectado:" data={cliente.tempoConectado} />
                    <ClienteRow title="Motivo Desconexão:" data={cliente.motivoDesconexao == '' ? 'Não cadastrado' : cliente.motivoDesconexao} />
                    <ClienteRow title="POP Cliente:" data={cliente.popCliente} />
                    <ClienteRow title="Status Internet:" data={statusInternetMap[cliente.statusInternet]} />
                </div>
            </div>
        </div>
    )
}