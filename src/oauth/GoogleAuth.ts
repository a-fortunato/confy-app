import Constants from 'expo-constants'
import * as Google from 'expo-google-app-auth'
import { GoogleLogInConfig, GoogleUser } from 'expo-google-app-auth'

const config: GoogleLogInConfig = {
  androidClientId: Constants.manifest.extra.androidGoogleClientId,
  iosClientId: Constants.manifest.extra.iosGoogleClientId,
  scopes: ['profile', 'email'],
}

export interface GoogleLogInResult {
  accessToken: string
  user: GoogleUser
}

export async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync(config)

    if (result.type === 'success') {
      const { accessToken, user } = result
      return {
        accessToken,
        user,
      }
    } else {
      return { cancelled: true }
    }
  } catch (e) {
    return { error: true }
  }
}

export async function logOutGoogleAsync(accessToken: string | null) {
  if (accessToken) {
    await Google.logOutAsync({ accessToken, ...config })
  }
}
