import { API_BASE_URL, DEFAULT_PAGE_SIZE, SORT_DIRECTIONS } from './constants';
import { validateEnv } from './env';

// Validate environment variables during development
if (import.meta.env.DEV) {
  validateEnv();
}

export const config = {
  api: {
    baseUrl: API_BASE_URL,
  },
  pagination: {
    defaultPageSize: DEFAULT_PAGE_SIZE,
  },
  sort: SORT_DIRECTIONS,
} as const;