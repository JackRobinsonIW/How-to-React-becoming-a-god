import { useState, createContext, Dispatch, SetStateAction } from 'react';

export type UserDetailsState = {
  user: null | string;
}
export type UserDetailsContextProps = {
  userDetails: UserDetailsState,
  setUserDetails: Dispatch<SetStateAction<UserDetailsState>>,
}
export type UserDetailsProviderProps = {
  children: React.ReactNode,
}

export const UserDetailsContext = createContext<UserDetailsContextProps | null>(null);

export const UserDetailsProvider = (props: UserDetailsProviderProps) => {
  const { children } = props;

  const [userDetails, setUserDetails] = useState<UserDetailsState>({ user: null});

  const value = { userDetails, setUserDetails };
  
  return (
      <UserDetailsContext.Provider value={value} >
          { children }
      </UserDetailsContext.Provider>
  )
}