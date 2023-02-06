import { useState, useEffect } from 'react'

export default function TableOrder() {
    interface Order {
        id: number;
        total_value: number;
        client_name: string;
        client_city: string;
        client_address: string;
        restaurantId: number;

    }

    const [orders, setOrder] = useState<Order[] | null>(null)
    const fetchOrders = async () => {
        try {
            const res = await fetch('http://localhost:3333/order')
            const data = await res.json()
            if (!data) {
                throw new Error('No data found');
            }
            console.log(data);
            data.total_value = formatPrice(data.total_value);
            setOrder(data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchOrders()
    }, [])

    const formatPrice = (price: number) => {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formatter.format(price);
    }


    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Valor total
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Nome do Cliente
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Cidade do Cliente
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Endereço do Cliente
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Restaurante
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders?.map((order) => (
                        <tr key={order.id} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center text-sm">
                                    <p className="font-semibold">{order.id}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center text-sm">
                                    <p className="font-semibold">R$ {order.total_value}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center text-sm">
                                    <p className="font-semibold">{order.client_name}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center text-sm">
                                    <p className="font-semibold">{order.client_city}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center text-sm">
                                    <p className="font-semibold">{order.client_address}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center text-sm">
                                    <p className="font-semibold">{order.restaurantId}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                <a href="#" className="font-medium ml-4 mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}