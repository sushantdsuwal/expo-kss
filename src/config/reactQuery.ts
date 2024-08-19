import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Customize caching and refetching behavior
      cacheTime: 1000 * 60 * 60 * 24 * 1, // Cache for 1 day
      // staleTime: Infinity, // Allow using cached data indefinitely m
      staleTime: 2000,
      retry: 3, // Retry failed queries up to 3 times
    },
  },
});
