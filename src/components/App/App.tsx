import * as classes from './App.module.sass';
import PostCards from '@/components/PostCards/PostCards';
import CreateCard from '@/components/CreateCard';
import { cards } from '@/components/Cards';
import CookCard from '../CookCard/CookCard';

const App = () => {
    return (
        <div className={classes.App}>
            <CreateCard />

            <PostCards cards={cards} />
        </div>
    );
};

export default App;
