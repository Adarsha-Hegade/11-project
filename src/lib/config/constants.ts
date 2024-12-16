export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const DEFAULT_PAGE_SIZE = 10;

export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;