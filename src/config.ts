import ExpoConstants from 'expo-constants'

declare var __DEV__: boolean

const DEV = 'dev'
const PROD = 'prod'
const LOCAL = 'local'

const CHANNELS_MAP = {
  testing: DEV,
  prod: PROD,
  [LOCAL]: LOCAL,
}

const CHANNEL = ExpoConstants.manifest.releaseChannel
  ? ExpoConstants.manifest.releaseChannel
  : LOCAL
const MODE = ExpoConstants.manifest.extra.mode || CHANNELS_MAP[CHANNEL] || LOCAL

function isLocal() {
  // Local always must be in __DEV__
  return __DEV__ && MODE === LOCAL
}

function isDev() {
  // dev mode or local mode in no DEV mode
  return MODE === DEV || (!__DEV__ && MODE === LOCAL)
}

function isProd() {
  return MODE === PROD
}

function getHost() {
  const hostUri = ExpoConstants.manifest.hostUri || ''
  const hostServer = hostUri.split(':')[0] || 'api-host'
  if (isLocal() || isDev()) {
    return `http://${hostServer}:3000`
  }
  return `http://${hostServer}:3000`
}

const HOST = getHost()

function getRoute(path: string): string {
  return getHost() + path
}

export default {
  releaseChannel: CHANNEL,
  mode: MODE,
  isLocal,
  isDev,
  isProd,
  getRoute,
  api: {
    host: HOST,
  },
}
