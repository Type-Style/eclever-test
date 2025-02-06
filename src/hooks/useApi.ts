import { CapitalApiResponse } from '../../types';

import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const useApi: () => {  citiesData: CapitalApiResponse[] | undefined, citiesError: Error | null } = () => {

  const { data: citiesData, error: citiesError } = useQuery({
    queryKey: ['citiesData'],
    queryFn: () => Promise.all([
      fetchData('https://restcountries.com/v3.1/capital/Berlin'),
      fetchData('https://restcountries.com/v3.1/capital/Paris'),
      fetchData('https://restcountries.com/v3.1/capital/Brussels')
    ]).then(([berlin, paris, brussels]) => [berlin, paris, brussels])
  });

  return { citiesData, citiesError };
};

export default useApi;
