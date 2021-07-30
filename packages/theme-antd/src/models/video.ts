export type Response = {
  playlist?: PlaylistElement[];
  clip?: Clip;
};

export type Clip = {
  title: string;
  start: number;
  end: number;
  url: string;
  chapters: Chapter[];
};

export type PlaylistElement = Chapter & {
  end: number;
  url: string;
};

export type Chapter = {
  order: number;
  title: string;
  start: number;
};
