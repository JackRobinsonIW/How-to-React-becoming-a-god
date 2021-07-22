import { useUserDetails } from "../hooks/useUserDetails";
import styles from "../styles.css";

export const SelectUserFormGroup = () => {
  const { input } = styles();
  const { setUserDetails } = useUserDetails();

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setUserDetails({ user: event.target.value })
  }

  return (
      <>
      <h3>Form Component</h3>
        <label htmlFor="user">Select a User</label>
        <select className={input} onChange={handleOnChange} defaultValue="" name="user">
            <option value="" disabled>Select User to Preview</option>
            <option>Adam</option>
            <option>Callum</option>
            <option>Joe</option>
            <option>Jack</option>
        </select>
      </>
  )
}