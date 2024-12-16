import { config } from '../config';

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
}

export function createApiUrl(path: string, params?: URLSearchParams): string {
  const url = new URL(path, config.api.baseUrl);
  if (params) {
    url.search = params.toString();
  }
  return url.toString();
}