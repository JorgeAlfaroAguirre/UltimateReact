import axios from "axios";
import { useEffect, useState } from "react";

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, seLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    seLoading(true);

    axios
      .get<{ meals: T[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore) {
          setData(data.meals);
        }
      })
      .finally(() => {
        if (!ignore) {
          seLoading(false);
        }
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  return { loading, data, setData };
}
