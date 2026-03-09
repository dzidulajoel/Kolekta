function Table({ columns, data }) {
        return (
                <div className="w-full overflow-x-auto mt-4 ">
                        <table className="w-full text-sm bg-gris rounded-sm">

                                <thead className="border-b border-gray-200 text-black">
                                        <tr className="">
                                                {columns.map((col, index) => (
                                                        <th key={index} className="text-left p-3 ">
                                                                {col.header}
                                                        </th>
                                                ))}
                                        </tr>
                                </thead>

                                <tbody className="w-full text-sm bg-white">
                                        {data.map((row, rowIndex) => (
                                                <tr key={rowIndex} className="border-b border-gray-100">

                                                        {columns.map((col, colIndex) => (
                                                                <td key={colIndex} className="p-3 text-gray-700">
                                                                        {row[col.accessor]}
                                                                </td>
                                                        ))}

                                                </tr>
                                        ))}
                                </tbody>

                        </table>
                </div>
        )
}

export default Table

