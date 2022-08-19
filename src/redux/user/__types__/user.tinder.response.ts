interface IUserTinder {
  width_pct: number;
  x_offset_pct: number;
  height_pct: number;
  y_offset_pct: number;
}

interface IAlgo {
  width_pct: number;
  x_offset_pct: number;
  height_pct: number;
  y_offset_pct: number;
}

interface IAlgo2 {
  width_pct: number;
  x_offset_pct: number;
  height_pct: number;
  y_offset_pct: number;
}

interface Face {
  algo: IAlgo2;
  bounding_box_percentage: number;
}

interface ICropInfo {
  user: IUserTinder;
  algo: IAlgo;
  processed_by_bullseye: boolean;
  user_customized: boolean;
  faces: Face[];
}

interface IProcessedFile {
  url: string;
  height: number;
  width: number;
}

interface IPhash {
  version: string;
  value: any;
}

interface Dhash {
  version: string;
  value: any;
}

interface IPhotoTinder {
  id: string;
  assets: any[];
  type: string;
  created_at: Date;
  updated_at: Date;
  crop_info: ICropInfo;
  url: string;
  processedFiles: IProcessedFile[];
  fileName: string;
  extension: string;
  fbId: string;
  webp_qf: number[];
  rank: number;
  score: number;
  win_count: number;
  phash: IPhash;
  dhash: Dhash;
}

interface IPos {
  at: number;
  lat: number;
  lon: number;
}

interface ICountry {
  name: string;
  cc: string;
  alpha3: string;
}

interface IPosInfo {
  country: ICountry;
  timezone: string;
}

interface ISchoolTinder {
  displayed: boolean;
  name: string;
}

interface ITinderResponseUserData {
  _id: string;
  age_filter_max: number;
  age_filter_min: number;
  badges: any[];
  birth_date: Date;
  create_date: Date;
  discoverable: boolean;
  distance_filter: number;
  email: string;
  gender: number;
  gender_filter: number;
  interested_in: number[];
  jobs: any[];
  name: string;
  photos: IPhotoTinder[];
  photo_optimizer_enabled: boolean;
  ping_time: Date;
  pos: IPos;
  pos_info: IPosInfo;
  schools: ISchoolTinder[];
  show_gender_on_profile: boolean;
  can_create_squad: boolean;
}

export type { ITinderResponseUserData };
