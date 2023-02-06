import SidebarComp from '@/components/Sidebar/Sidebar'
import TableRestaurant from '@/components/TableRestaurant/TableRestaurant'
import Head from 'next/head'

export default function Restaurant() {



    return (
        <>
            <Head>
                <title>RESTaurant - Restaurantes</title>
                <meta name="description" content="Sistema de gerenciamento de restaurantes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <div className='flex'>
                <SidebarComp />
                <div className='flex-col w-screen'>
                    <div className='pt-8'>
                        <h1 className='text-3xl font-bold mb-6 text-center uppercase'>Restaurantes</h1>
                    </div>
                    <div className='flex justify-center'>
                        <TableRestaurant/>
                    </div>
                </div>
            </div>
        </>
    )
} 