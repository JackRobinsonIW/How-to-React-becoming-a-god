import { useContext } from "react"
import { UserDetailsContext } from "../providers/UserDetailsProvider"

export const useUserDetails = () => {
  const userDetailsContext = useContext(UserDetailsContext);

  if (!userDetailsContext) {
    throw new Error('useUserDetails cannot be used outside of a UserDetailsProvider');
  }

  return userDetailsContext;
}