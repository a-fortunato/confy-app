export enum OAuthProvider {
  Google,
}

export interface User {
  accessToken: string
  id?: string
  email: string
  name: string
  avatar?: string
  provider: OAuthProvider
}
