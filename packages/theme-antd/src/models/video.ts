export type PlayerConfig = OnlyClip | OnlyPlaylist

export type OnlyClip = {
  clip: Clip
  playlist: null
  __mode: 'clip'
}

export type OnlyPlaylist = {
  clip: null
  playlist: PlaylistElement[]
  __mode: 'playlist'
}

export type Clip = {
  title: string
  start: number
  end: number
  url: string
  chapters: Chapter[]
}

export type PlaylistElement = Chapter & {
  end: number
  url: string
}

export type Chapter = {
  order: number
  title: string
  start: number
}
