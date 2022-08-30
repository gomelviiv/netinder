interface ISchool {
  name: string;
  displayed: boolean;
}

interface ITeaser {
  type: string;
  string: string;
}

interface IJobs {
  company: { name: string };
  title: { name: string };
}

interface IBadge {
  type: string;
}

interface IUser {
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

interface IFace {
  algo: IAlgo2;
  bounding_box_percentage: number;
}

interface ICropInfo {
  user: IUser;
  algo: IAlgo;
  processed_by_bullseye: boolean;
  user_customized: boolean;
  faces: IFace[];
}

interface IProcessedFile {
  url: string;
  height: number;
  width: number;
}

interface IPhoto {
  id: string;
  crop_info: ICropInfo;
  url: string;
  processedFiles: IProcessedFile[];
  processedVideos: any[];
  fileName: string;
  extension: string;
  assets: any[];
  media_type: string;
}

interface ISelectedInterest {
  id: string;
  name: string;
}

interface IUserInterests {
  selected_interests: ISelectedInterest[];
}

interface ICity {
  name: string;
}

interface IIconUrl {
  url: string;
  quality: string;
  width: number;
  height: number;
}

interface IChoiceSelection {
  id: string;
  name: string;
}

interface ISelectedDescriptor {
  id: string;
  name: string;
  prompt: string;
  type: string;
  icon_url: string;
  icon_urls: IIconUrl[];
  choice_selections: IChoiceSelection[];
}

interface IResults {
  common_friends: any[];
  common_friend_count: number;
  spotify_top_artists: any[];
  distance_mi: number;
  connection_count: number;
  common_connections: any[];
  bio: string;
  birth_date: Date;
  name: string;
  is_travelling: boolean;
  jobs: any[];
  schools: ISchool[];
  teasers: ITeaser[];
  gender: number;
  show_gender_on_profile: boolean;
  birth_date_info: string;
  ping_time: Date;
  badges: IBadge[];
  photos: IPhoto[];
  user_interests: IUserInterests;
  common_likes: any[];
  common_like_count: number;
  city: ICity;
  common_interests: any[];
  selected_descriptors: ISelectedDescriptor[];
  s_number: number;
  _id: string;
  is_tinder_u: boolean;
}

interface ITinderResponseMatchProfile {
  status: number;
  results: IResults;
}

export type {
  ITinderResponseMatchProfile,
  IJobs,
  IPhoto,
  IUserInterests,
  ISelectedDescriptor,
  ISchool,
  ICity,
  ISelectedInterest,
};
