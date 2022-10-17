export default interface Character {
  gender: string;
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}
