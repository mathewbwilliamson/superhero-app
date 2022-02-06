import React from "react";
import { apiClient } from "../services/apiService";

export function useFetchData<T>(endpoint: string) {
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: response } = await apiClient.get<T>(endpoint);

        setData(response);
      } catch (err) {
        console.error(err);
        setError(err as any);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
