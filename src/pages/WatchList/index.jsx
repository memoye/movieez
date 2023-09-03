import ListCard from '../../components/ListCard';
import Page from '../../components/Page';
import styles from './watchlist.module.css';
import { dummyMovies } from '../../utils';

const WatchList = () => {
    const username = 'Brown'

    return (
        <Page
            title={ `${username}'s watchlist` }
        >
            <ListCard
                { ...dummyMovies[0] }
            />
        </Page>
    )
}
export default WatchList