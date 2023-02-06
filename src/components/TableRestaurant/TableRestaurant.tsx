import { useEffect, useState } from 'react'

export default function TableRestaurant(props: any) {
    interface Restaurant {
        id: number;
        name: string;
        email: string;
        category: string;
        city: string;
        address: string;
        phone: string;
    }

    const [restaurantes, setRestaurant] = useState<Restaurant[] | null>(null)
    const fetchRestaurant = async () => {
        try {
            const res = await fetch('http://localhost:3333/restaurant')
            const data = await res.json()
            if (!data) {
                throw new Error('No data found');
            }
            setRestaurant(data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchRestaurant()
    }, [])

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Restaurante
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            E-mail
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Categoria
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Cidade
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Endereço
                        </th>
                        <th scope="col" className="text-center px-6 py-3">
                            Telefone
                        </th>
                        <th scope="col" className="text-center px-6 py-3">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurantes && restaurantes.map((restaurant) => (
                            <tr key={restaurant.id} className="bg-white dark:bg-gray-800">
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {restaurant.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {restaurant.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {restaurant.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {restaurant.category}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {restaurant.city}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {restaurant.address}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {restaurant.phone}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                        <a href="#" className="font-medium ml-4 mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                    </td>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}