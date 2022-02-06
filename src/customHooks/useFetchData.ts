import React from "react";
import { apiClient } from "../services/apiService";

export function useFetchData<T>(endpoint: string) {
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data: response } = await apiClient.get<T>(endpoint);

        setData(response);
      } catch (err) {
        console.error(err);
        setError(err as any);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
