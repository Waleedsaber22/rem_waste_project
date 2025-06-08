import { useState, useEffect } from "react";
import axios from "axios";

function buildUrl(url, query = {}) {
  const urlObj = new URL(url, window.location.origin);

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlObj.searchParams.set(key, value);
    }
  });

  return urlObj.toString();
}

/**
 * @param {string} url - base URL
 * @param {object} options - optional
 * @param {object} options.query - key-value pairs for URL query params
 * @param {object} options.params - axios request config (headers, etc)
 */
export function useGetQuery(url, options = {}) {
  const { query = {}, params = {} } = options;

  const [queryApi, setQueryApi] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const fullUrl = buildUrl(url, query);

  useEffect(() => {
    const source = axios.CancelToken.source();

    setQueryApi((prev) => ({ ...prev, isLoading: true }));

    axios
      .get(fullUrl, { cancelToken: source.token, params })
      .then((response) => {
        setQueryApi({
          data: response.data,
          isLoading: false,
          error: null,
        });
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setQueryApi({
            data: null,
            isLoading: false,
            error: err.message,
          });
        }
      });

    return () => {
      source.cancel("Request canceled");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullUrl, JSON.stringify(params)]);

  return queryApi;
}
