import { ICity, IPhoto, ISchool, IUserInterests } from './matches.tinder.response';

interface IMatch {
  id: string;
  tinderId: string;
  age: string;
  name: string;
  photo: string;
}

interface IAllMatchesRequest {
  token: string;
  phoneNumber: string;
}

interface IMatchActionRequest {
  id: string;
  token: string;
}

interface IMatchProfile {
  name: string;
  bio: string;
  birthDate: Date;
  jobs: any[];
  schools: ISchool[];
  photos: IPhoto[];
  userInterests: IUserInterests;
  city: ICity;
}

export type { IMatch, IAllMatchesRequest, IMatchActionRequest, IMatchProfile };
