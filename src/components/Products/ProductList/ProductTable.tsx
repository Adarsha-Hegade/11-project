import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ArrowUpDown, Eye } from 'lucide-react';
import type { Product } from '../../../types';

interface ProductTableProps {
  products: Product[];
  sortField: string;
  sortDirection: 'asc' | 'desc';
  onSort: (field: string) => void;
}

export function ProductTable({ products, sortField, sortDirection, onSort }: ProductTableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <button
                onClick={() => onSort('name')}
                className="flex items-center gap-2"
              >
                Product
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Code
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <button
                onClick={() => onSort('manufacturer')}
                className="flex items-center gap-2"
              >
                Manufacturer
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <button
                onClick={() => onSort('stock')}
                className="flex items-center gap-2"
              >
                Stock
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Package className="w-5 h-5 text-gray-400 mr-2" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.name || product.code}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {product.code}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {product.manufacturer}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StockInfo stock={product.stock} bookings={product.bookings} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link
                  to={`/products/${product.id}`}
                  className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Eye className="w-5 h-5" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}