import { useState } from "react";

const DataTable = ({
    rows = [],
    columns = [],
    showCheckbox = false,
    onSelectRows,
}) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const isSelected = (row) =>
        selectedRows.some((r) => r.id ? r.id === row.id : r === row);

    const toggleRow = (row) => {
        let updated;

        if (isSelected(row)) {
            updated = selectedRows.filter((r) =>
                r.id ? r.id !== row.id : r !== row
            );
        } else {
            updated = [...selectedRows, row];
        }

        setSelectedRows(updated);
        onSelectRows?.(updated);
    };

    const toggleAll = () => {
        if (selectedRows.length === rows.length) {
            setSelectedRows([]);
            onSelectRows?.([]);
        } else {
            setSelectedRows(rows);
            onSelectRows?.(rows);
        }
    };

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">

            {/* TABLE WRAPPER */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">

                    {/* HEADER */}
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                        <tr>
                            {showCheckbox && (
                                <th className="p-4 w-12">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 accent-black cursor-pointer"
                                        checked={selectedRows.length === rows.length && rows.length > 0}
                                        onChange={toggleAll}
                                    />
                                </th>
                            )}

                            {columns.map((col) => (
                                <th key={col.key} className="text-left font-semibold p-4">
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="divide-y divide-gray-100">
                        {rows.map((row, i) => {
                            const active = isSelected(row);

                            return (
                                <tr
                                    key={i}
                                    className={`
                    transition
                    hover:bg-gray-50
                    ${active ? "bg-gray-100" : "bg-white"}
                  `}
                                >

                                    {/* CHECKBOX */}
                                    {showCheckbox && (
                                        <td className="p-4">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 accent-black cursor-pointer"
                                                checked={active}
                                                onChange={() => toggleRow(row)}
                                            />
                                        </td>
                                    )}

                                    {/* CELLS */}
                                    {columns.map((col) => (
                                        <td
                                            key={col.key}
                                            className="p-4 text-gray-700 whitespace-nowrap"
                                        >
                                            {col.render ? col.render(row, i) : row[col.key]}
                                        </td>
                                    ))}

                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default DataTable;