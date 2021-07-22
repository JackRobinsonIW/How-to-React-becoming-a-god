import { UserForm } from "./formComponents/UserForm";
import { UserPreview } from "./formComponents/UserPreview";
import { UserDetailsProvider } from "./providers/UserDetailsProvider"
import styles from "./styles.css";

export const UseContext = () => {
    const { flexContainer } = styles();
    return (
        <div className={flexContainer}>
            <UserDetailsProvider >
                <UserForm />
                <UserPreview />
            </UserDetailsProvider>
        </div>
    )
}