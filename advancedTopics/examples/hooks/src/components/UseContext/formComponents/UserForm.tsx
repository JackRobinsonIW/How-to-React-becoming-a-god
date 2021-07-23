import { SelectUserFormGroup } from "./SelectUserFormGroup"
import styles from "../styles.css";

export const UserForm = () => {
  const { form } = styles();
  return (
      <form className={ form }>
          <SelectUserFormGroup />
      </form>
  )
}