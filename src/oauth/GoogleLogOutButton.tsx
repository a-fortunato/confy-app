import React from 'react'
import { logOutGoogleAsync } from './GoogleAuth'
import LogOutButton from './LogOutButton'

interface Props {}

const GoogleLogOutButton: React.FC<Props> = () => {
  return <LogOutButton logOut={logOutGoogleAsync} />
}

export default GoogleLogOutButton
