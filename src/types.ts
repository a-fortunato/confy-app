export interface Session {
  name: string // title
  url: string
  date: string
  time: string
  place: string // future Venue
  speaker?: string // future Speaker(s)
  description?: string
  type?: string // future Type/Category/sth
}

export interface Type {
  name: string
  url: string
  color?: string
}

// venues are the specific location the sessions take place, such as room or hall
export interface Venue {
  name: string
  url: string
  address?: string // future map address
}

export interface Person {
  name: string
  url: string
  image: string
}

export interface Speaker extends Person {}

export interface Attendee extends Person {
  company?: string
  position?: string
  web?: Web
}

export interface Web {
  text: string
  url: string
}

export type StackParamList = {
  SessionsList: undefined
  SessionDetails: {
    session: Session
    color?: string
  }
}
