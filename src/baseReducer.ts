import { JS_ERROR, RESET_STATE } from '@redux-offline/redux-offline/lib/constants'

const baseReducer = (appReducer, errorManager = console.error) => (state, action) => {
  try {
    if (__DEV__) {
      console.log('ACTION', action)
    }
    if (action.type === JS_ERROR) {
      errorManager(new Error(action.meta.error))
    }
    if (action.type === RESET_STATE) {
      state = undefined
    }
    return appReducer(state, action)
  } catch (e) {
    if (__DEV__) {
      console.log('REDUX ERROR', e)
    }
    errorManager(e)
  }
}

export default baseReducer
