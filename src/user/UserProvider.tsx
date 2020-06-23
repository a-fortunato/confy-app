import React, { createContext, useCallback, useContext, useState } from 'react'
import { User } from './types'

interface UserContext {
  user: User | null
  saveUser(user: User): void
  deleteUser(id: string): void
}

const initialState: UserContext = {
  user: null,
  saveUser: () => {},
  deleteUser: () => {},
}

const UserContext = createContext<UserContext>(initialState)

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(initialState.user)
  const saveUser = useCallback((newUser: User) => setUser(newUser), [])
  const deleteUser = useCallback(
    (id: string) => {
      if (user?.id === id) {
        setUser(null)
      }
    },
    [user?.id]
  )

  return (
    <UserContext.Provider value={{ user, saveUser, deleteUser }}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
