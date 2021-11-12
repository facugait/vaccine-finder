export interface Location {
  lat?: number;
  lng?: number;
}

export interface Practice {
  name?: string;
  address?: string;
  phone?: string;
  linkToScheduler?: any;
  location?: Location;
  image?: any;
  description?: string;
}
