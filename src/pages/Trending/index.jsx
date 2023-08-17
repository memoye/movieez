import { CustomButton } from '../../components';
import styles from './trending.module.css';

const Trending = () => {


    return (
        <div className={ styles.Trending }>
            <CustomButton
                label={ 'Welcome' }
                handleClick={ () => { console.log('from Trending') } }
                filled={ true }

            />
        </div>
    )
}
export default Trending