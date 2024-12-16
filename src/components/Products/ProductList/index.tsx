import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { useProductStore } from '../../../store/productStore';
import { Alert } from '../../common/Alert';
import { ProductTable } from './ProductTable';
import { Filters } from './Filters';

type SortField = 'name' | 'category' | 'manufacturer' | 'stock';

export function ProductList() {
  const { products, isLoading, error, fetchProducts, clearError } = useProductStore();
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('');

  useEffect(() => {
    fetchProducts({
      sortBy: sortField,
      sortOrder: sortDirection,
      manufacturer: selectedManufacturer || undefined
    });
  }, [sortField, sortDirection, selectedManufacturer]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const manufacturers = Array.from(new Set(products.map(p => p.manufacturer)));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Products
        </h1>
        <Link
          to="/products/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Product
        </Link>
      </div>

      {error && (
        <Alert
          type="error"
          message={error}
          onClose={clearError}
        />
      )}

      <Filters
        manufacturers={manufacturers}
        selectedManufacturer={selectedManufacturer}
        onManufacturerChange={setSelectedManufacturer}
      />

      <ProductTable
        products={products}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={handleSort}
      />
    </div>
  );
}