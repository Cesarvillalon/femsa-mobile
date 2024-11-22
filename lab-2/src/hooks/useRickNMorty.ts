import {useEffect, useState} from 'react';
import {APIResponse, Character} from '../types/common/UserCharacter.type';

export const useRickAndMorty = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    setLoading(true);

    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data: APIResponse = await response.json();

    setCharacters(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return {
    loading,
    characters,
  };
};
