import React from 'react'
import DataTable from '../../UIComponents/DataTable'
import UniversalButton from '../../UIComponents/UniversalButtton';
import { TfiReload } from "react-icons/tfi";
import { IoMdAdd } from "react-icons/io";

const Users = () => {

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
        <div className='bg-gray-200 p-4 rounded-xl shadow-amber-50 shadow-xl'>
            <div className='flex justify-between items-center'>
            <div className='text-xl font-medium my-4'>Users Data</div>
            <div className='flex gap-2'>
                <UniversalButton label="Add User" leftIcon={<IoMdAdd />}/>
                <UniversalButton label="Refresh" leftIcon={<TfiReload />}/>
            </div>
            </div>
            <div>
                <DataTable
                    columns={columns}
                    rows={rows}
                />
            </div>
        </div>
    )
}

export default Users