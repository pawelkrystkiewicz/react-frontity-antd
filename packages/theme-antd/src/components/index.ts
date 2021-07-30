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

const responseWithClip: Response = {
  playlist: undefined,
  clip: {
    start: 0,
    end: 10000,
    title: "Clip Title",
    url: "youtube.com/watch?ccc",
    chapters: [
      {
        order: 1,
        title: "Rozdział 1",
        start: 120
      },
      {
        order: 2,
        title: "Rozdział 2",
        start: 150
      }
    ]
  }
};

const responseWithPlaylist: Response = {
  clip: undefined,
  playlist: [
    {
      order: 1,
      title: "Clip 1",
      start: 10,
      end: 122,
      url: "youtbe.com/aaa"
    },
    {
      order: 2,
      start: 456,
      end: 984,
      title: "Clip 2",
      url: "youtbe.com/bbb"
    }
  ]
};
