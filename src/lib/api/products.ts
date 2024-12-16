import { handleResponse, createApiUrl } from './base';
import type { Product } from '../../types';

interface ProductQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  manufacturer?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

interface ProductResponse {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}

export async function getProducts(params: ProductQueryParams = {}): Promise<ProductResponse> {
  const queryParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const response = await fetch(createApiUrl('/products', queryParams), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return handleResponse<ProductResponse>(response);
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(createApiUrl(`/products/${id}`), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return handleResponse<Product>(response);
}

export async function createProduct(data: FormData): Promise<Product> {
  const response = await fetch(createApiUrl('/products'), {
    method: 'POST',
    body: data,
  });
  return handleResponse<Product>(response);
}

export async function updateProduct(id: string, data: FormData): Promise<Product> {
  const response = await fetch(createApiUrl(`/products/${id}`), {
    method: 'PUT',
    body: data,
  });
  return handleResponse<Product>(response);
}

export async function deleteProduct(id: string): Promise<void> {
  const response = await fetch(createApiUrl(`/products/${id}`), {
    method: 'DELETE',
  });
  return handleResponse<void>(response);
}