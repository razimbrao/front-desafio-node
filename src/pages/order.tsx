import SidebarComp from '@/components/Sidebar/_index'
import TableOrder from '@/components/TableOrder/_index'
import Head from 'next/head'

export default function Order(){
    return(
        <>
            <Head>
                <title>RESTaurant - Pedidos</title>
                <meta name="description" content="Sistema de gerenciamento de restaurantes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <div className='flex'>
                <SidebarComp />
                <div className='flex-col w-screen'>
                    <div className='pt-8'>
                        <h1 className='text-3xl font-bold mb-6 text-center uppercase'>Pedidos</h1>
                    </div>
                    <div className='flex justify-center'>
                        <TableOrder/>
                    </div>
                </div>
            </div>
        </>
    )
} 