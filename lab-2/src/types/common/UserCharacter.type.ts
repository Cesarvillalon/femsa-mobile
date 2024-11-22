export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Male' | 'Female' | 'unknown' | 'other';
export type CharacterSpecies =
  | 'Humanoid'
  | 'Alien'
  | 'Robot'
  | 'Human'
  | 'Mythological Creature'
  | 'Animal'
  | 'unknown';

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: CharacterSpecies;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
};

export type APIInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
export type APIResponse = {
  info: APIInfo;
  results: Character[];
};

export type BaseType = {
  name: string;
  image: string;
};
export type Origin = BaseType;
export type Location = BaseType;
