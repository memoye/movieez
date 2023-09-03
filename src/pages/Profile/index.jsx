import styles from './profile.module.css'
import { pic } from "../../assets"
import Page from '../../components/Page'
import { sampleUser } from '../../utils'
import { CustomButton } from '../../components'
import { BiLogOut } from 'react-icons/bi'

const Profile = (props) => {
    props = sampleUser
    const { name, coverImg, userImg, favorites, joinDate, watchlist, genres } = props


    return (
        <Page className={ styles.page }>
            <div className={ styles.user }>
                <div
                    style={ { background: `url(${coverImg}) no-repeat center center / cover` } }
                    className={ styles.coverImg }>
                    <div className={ styles.profileImg }>
                        <img src={ userImg } alt={ name } />
                    </div>
                </div>
                <div className={ styles.userInfo }>
                    <h3 className={ styles.name }>{ name }</h3>
                    <p className={ styles.joinDate }>Member since { joinDate }</p>

                    <div className={ styles.genreArea }>
                        <h4 className={ styles.subheading }>Favorite Genres</h4>
                        <div className={ styles.genres }>

                            {
                                genres.map(genre => (
                                    <button
                                        key={ Math.random() }
                                        className={ styles.genrebtn }>
                                        { genre }
                                    </button>

                                ))
                            }
                        </div>
                    </div>

                    <div className={ styles.watchlistArea }>
                        <h4 className={ styles.subheading }>Watch List</h4>
                        <div>
                            {/* map through watch list here */ }
                        </div>
                    </div>

                    <div className={ styles.buttons }>
                        <CustomButton
                            label={ 'Logout' }
                            customStyle={ styles.button }
                        />
                        <CustomButton
                            label={ 'Delete Account' }
                            customStyle={ `${styles.button} ${styles.delAcct}` }
                        />
                    </div>
                </div>

            </div>


        </Page >
    )
}
export default Profile