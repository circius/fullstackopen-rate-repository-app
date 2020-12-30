import { useState, useEffect } from 'react';
import constants from '../constants.js';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  const ENDPOINT = `${constants.baseUrl}/api/repositories`;

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch(ENDPOINT);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;