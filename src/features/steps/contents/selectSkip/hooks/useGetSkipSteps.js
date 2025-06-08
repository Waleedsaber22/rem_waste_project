import { useGetQuery } from "../../../../../hooks/useGetQuery";

const useGetSkipSteps = (params) => {
  const res = useGetQuery(`${import.meta.env.VITE_API_URL}/skips/by-location`, {
    params,
  });
  return res;
};

export default useGetSkipSteps;
