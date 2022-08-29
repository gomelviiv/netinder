import { ICity, IJobs, IPhoto, ISchool, IUserInterests } from './matches.tinder.response';

interface IMatch {
  tinderId: string;
  age: number;
  name: string;
  photoUrl: string;
}

interface IAllMatchesRequest {
  token: string;
  phoneNumber: string;
}

interface IMatchActionRequest {
  id: string;
  token: string;
  phoneNumber: string;
}

interface IMatchProfile {
  name: string;
  bio: string;
  birthDate: Date;
  jobs: IJobs[];
  schools: ISchool[];
  photos: IPhoto[];
  userInterests: IUserInterests;
  city: ICity;
}

export type { IMatch, IAllMatchesRequest, IMatchActionRequest, IMatchProfile };
