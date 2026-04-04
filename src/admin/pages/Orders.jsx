import React from 'react';
import DataTable from '../../UIComponents/DataTable';

const Orders = () => {
    const columns = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" },
    ]

    const rows = [
        { name: "John Doe", email: "john.doe@example.com", role: "User" },
        { name: "Jane Smith", email: "jane.smith@example.com", role: "Admin" },
    ];

    return (
        <div>
            <div className='text-xl font-medium my-4'>Orders Data</div>
            <div>
                <DataTable
                    columns={columns}
                    rows={rows}
                />
            </div>
        </div>
    )
}

export default Orders