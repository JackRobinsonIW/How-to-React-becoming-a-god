import { useUserDetails } from "../hooks/useUserDetails";
import styles from "../styles.css";

const fakeUserData: Record<string, {colour: string}> = {
  'Adam': { colour: 'green' },
  'Callum': { colour: 'blue' },
  'Jack': { colour: 'red' },
  'Joe': { colour: 'yellow' },
}

export const UserPreview = () => {
  const { preview } = styles();

  const { userDetails } = useUserDetails();

  return (
    <>
      <div className={preview}>
        <h3>User Preview Component</h3>
        <ul>
          <li>{userDetails.user}</li>
          {userDetails.user && (<li>Fave colour is: {fakeUserData[userDetails.user].colour}</li>) }
        </ul>
      </div>
    </>
  )
}