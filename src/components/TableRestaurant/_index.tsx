export default function TableRestaurant(){
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Bar Dias
                        </th>
                        <td className="px-6 py-4">
                            admin@eldorado.com
                        </td>
                        <td className="px-6 py-4">
                            Bar
                        </td>
                        <td className="px-6 py-4">
                            Juiz de Fora
                        </td>
                        <td className="px-6 py-4">
                            Eldorado
                        </td>
                        <td className="px-6 py-4">
                            (32) 99999-9999
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                            <a href="#" className="font-medium ml-4 mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}