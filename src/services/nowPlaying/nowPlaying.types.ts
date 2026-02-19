export interface LastFmImage {
  size: 'small' | 'medium' | 'large' | 'extralarge'
  '#text': string
}

export interface LastFmMbidEntity {
  mbid: string
  '#text': string
}

export interface LastFmTrackDate {
  uts: string
  '#text': string
}

export interface LastFmTrackNowPlayingAttr {
  nowplaying: 'true'
}

export interface LastFmTrack {
  artist: LastFmMbidEntity
  streamable: string
  image: LastFmImage[]
  mbid: string
  album: LastFmMbidEntity
  name: string
  url: string
  '@attr'?: LastFmTrackNowPlayingAttr
  date?: LastFmTrackDate
}

export interface RecentTracksAttr {
  user: string
  totalPages: string
  page: string
  perPage: string
  total: string
}

export interface RecentTracksResponse {
  recenttracks: {
    track: LastFmTrack[]
    '@attr': RecentTracksAttr
  }
}
