export interface Game {
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: string;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Trailer {
  data: {
    max: string;
  };
}

interface Screenshots {
  image: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Publishers {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
  };
}

interface Genre {
  name: string;
}
