import { useEffect, useState } from 'react';

export default function TableProduct() {

    interface Product {
        id: number;
        name: string;
        description: string;
        price: number;
        category: string;
        restaurantId: number;
    }

    const [products, setProduct] = useState<Product[] | null>(null)
    const fetchProducts = async () => {
        try {
            const res = await fetch('http://localhost:3333/Product')
            const data = await res.json()
            if (!data) {
                throw new Error('No data found');
            }
            console.log(data);
            data.price = formatPrice(data.price);
            setProduct(data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchProducts()
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
                            Produto
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Descrição
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Preço
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Categoria
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
                    {
                        products && products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {product.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {product.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    R$ {product.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {product.category}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {product.restaurantId}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    <a href="#" className="font-medium ml-4 mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}