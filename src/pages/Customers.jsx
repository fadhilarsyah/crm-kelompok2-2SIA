import React from 'react';

const customersData = [
  { id: 1, name: 'Budi Santoso', email: 'budi@gmail.com', phone: '0812-3456-7890', totalOrders: 5 },
  { id: 2, name: 'Siti Aminah', email: 'siti@gmail.com', phone: '0813-4567-8901', totalOrders: 3 },
  { id: 3, name: 'Agus Haryanto', email: 'agus@gmail.com', phone: '0814-5678-9012', totalOrders: 8 },
];

const Customers = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Data Pelanggan</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Telepon</th>
              <th className="py-3 px-6 text-left">Total Order</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {customersData.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{customer.name}</td>
                <td className="py-3 px-6 text-left">{customer.email}</td>
                <td className="py-3 px-6 text-left">{customer.phone}</td>
                <td className="py-3 px-6 text-left">{customer.totalOrders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
