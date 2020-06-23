import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface Session {
  id: string
  title: string
  startsAt: Date
  endsAt: Date
  type: Type
  venue?: string
  address?: string
  speaker?: Person['id'][]
  description?: string
}

export interface Type {
  name: string
  color?: string
}

export interface Person {
  id: string
  fullName: string
  email: string
  avatar?: Avatar
}

interface Avatar {
  src: string
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

// Navigation types
export type StackParamList = {
  SessionsList: undefined
  SessionDetails: {
    sessionId: string
    title: string
    type: string
    color?: string
  }
}

export type SessionsListRouteProp = RouteProp<StackParamList, 'SessionsList'>
export type SessionsListNavigationProp = StackNavigationProp<StackParamList, 'SessionsList'>

export type SessionDetailsRouteProp = RouteProp<StackParamList, 'SessionDetails'>
export type SessionDetailsNavigationProp = StackNavigationProp<StackParamList, 'SessionDetails'>
