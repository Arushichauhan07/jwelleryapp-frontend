import React from 'react';
import DataTable from '../../UIComponents/DataTable';
import UniversalButton from '../../UIComponents/UniversalButtton';
import { TfiReload } from "react-icons/tfi";
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const ProductsAdmin = () => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "price", label: "Price" },
    { key: "category", label: "Category" },
    { key: "quantity", label: "Quantity" },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setDeleteState({
                isOpen: true,
                id: row.id,
              });
            }}
          >
            <MdEdit className="text-blue-500 hover:text-blue-700" />
          </button>
        </div>
      ),
    },
  ];

  const rows = [
    { id: 1, name: "Diamond Ring", price: "$5000", category: "Rings", quantity: 10 },
    { id: 2, name: "Gold Necklace", price: "$3000", category: "Necklaces", quantity: 5 },
    { id: 3, name: "Silver Bracelet", price: "$1500", category: "Bracelets", quantity: 20 },
  ];

  return (
    <div className='bg-gray-200 p-4 rounded-xl shadow-amber-50 shadow-xl'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium my-4'>Products Data</div>
        <div className='flex gap-2'>
          <UniversalButton label="Add Product" leftIcon={<IoMdAdd />} />
          <UniversalButton label="Refresh" leftIcon={<TfiReload />} />
        </div>
      </div>
      <div><DataTable columns={columns} rows={rows} /></div>
    </div>
  )
}

export default ProductsAdmin