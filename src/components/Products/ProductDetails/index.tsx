import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { ProductInfo } from './ProductInfo';
import { StockHistory } from './StockHistory';
import { useProductStore } from '../../../store/productStore';
import { Alert } from '../../common/Alert';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { selectedProduct, isLoading, error, getProduct, clearError } = useProductStore();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!selectedProduct && !isLoading) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Product not found
        </h2>
        <button
          onClick={() => navigate('/products')}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert
          type="error"
          message={error}
          onClose={clearError}
        />
      )}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {selectedProduct?.name || selectedProduct?.code}
        </h1>
        <button
          onClick={() => navigate('/products')}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back to Products
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {selectedProduct && <ProductInfo product={selectedProduct} />}
        </div>
        <div>
          <StockHistory productId={id} />
        </div>
      </div>
    </div>
  );
}