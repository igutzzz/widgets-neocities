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
  album: LastFmMbidEntity
  artist: LastFmMbidEntity
  date?: LastFmTrackDate
  image: LastFmImage[]
  mbid: string
  name: string
  streamable: string
  url: string
  '@attr'?: LastFmTrackNowPlayingAttr
}

export interface TrackResponse {
  track: LastFmTrack
}
