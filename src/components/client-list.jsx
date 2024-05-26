import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function ClientList() {
    const [search, setSearch] = useState(() => {
        const url = new URL(window.location.toString())

        if(url.searchParams.has('search')) {
            return url.searchParams.get('search') ?? ''
        }

        return ''
    })
    const [clients, setClients] = useState([])
    const [page, setPage] = useState(() => {
        const url = new URL(window.location.toString())

        if(url.searchParams.has('page')) {
            return Number(url.searchParams.get('page'))
        }

        return 1
    })

    const [total, setTotal] = useState(0)

     useEffect(() => {
        const url = new URL('http://localhost:3333/findManyCliente/')

        url.searchParams.set('pageIndex', String(page - 1))

        if (search.length > 0) url.searchParams.set('query', search)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(JSON.parse(data.clientes))
                setClients(JSON.parse(data.clientes))
                setTotal(JSON.parse(data.total))
             })
     }, [page, search])

    function setCurrentSearch(search) {
        const url = new URL(window.location.toString())

        url.searchParams.set('search', search)

        window.history.pushState({}, "", url)

        setSearch(search.toUpperCase())
    }

    function setCurrentPage(page) {
        const url = new URL(window.location.toString())

        url.searchParams.set('page', String(page))

        window.history.pushState({}, "", url)

        setPage(page)
    }

    function onSearchInputChaged(event) {
        setCurrentSearch(event.target.value)
        setCurrentPage(1)
    }

    const totalPages = Math.ceil(total / 10)

    function goToNextPage() {
        setCurrentPage(page + 1)
    }

    function goToPreviousPage() {
        setCurrentPage(page - 1)
    }

    function goToFistPage() {
        setCurrentPage(1)
    }

    function goToLastPage() {
        setCurrentPage(totalPages)
    }

    return (
        <div className='flex flex-col gap-4 text-gray-900'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold" >Clientes</h1>
                <div className="px-3 w-72 py-1.5 border border-black/40 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-emerald-300' />
                    <input 
                        onChange={onSearchInputChaged}
                        value={search}
                        className='bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0'
                        placeholder="Buscar pelo nome..."
                    />
                </div>
            </div>
            <Table>
                <thead>
                    <tr className='border-b border-black/40'>
                        <TableHeader style={{ width: 48 }}>
                            <input type='checkbox' className='size-4 bg-black/20 rounded border border-black/40'/>
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Cliente</TableHeader>
                        <TableHeader>Cidade</TableHeader>
                        <TableHeader>Bairro</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => {
                        return (
                            <TableRow key={client.id} className='border-b border-black/40 hover:bg-white/40'>
                                <TableCell>
                                    <input type='checkbox' className='size-4 bg-black/20 rounded border border-black/40'/>
                                </TableCell>
                                <TableCell>{client.id}</TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-gray-900'>{client.nomeCliente}</span>
                                        <span>{client.valorPlano}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{client.cidadeCliente}</TableCell>
                                <TableCell>
                                    {client.bairroCliente}
                                </TableCell>
                                <TableCell>
                                    <Link to={`cliente/${client.id}`}>
                                        <IconButton transparent>
                                                <MoreHorizontal className='size-4'/>
                                        </IconButton>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            Mostrando {clients.length} de {total} itens
                        </TableCell>
                        <td className='py-3 px-4 text-sm text-gray-900 text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página {page} de {totalPages}</span>

                                <div className='flex gap-1.5'>
                                    <IconButton onClick={goToFistPage} disabled={page === 1}>
                                        <ChevronsLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                                        <ChevronRight className='size-4'/>
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                                        <ChevronsRight className='size-4'/>
                                    </IconButton>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}