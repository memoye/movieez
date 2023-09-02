import styles from './profile.module.css'
import { pic } from "../../assets"

const Profile = () => {
    return (
        <main className={ styles.profile }>
            <div className={ styles.profilePic }>
                <img src={ pic } alt={ 'user name' } />
            </div>

        </main>
    )
}
export default Profile