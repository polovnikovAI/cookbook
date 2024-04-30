import * as classes from './App.module.sass';
import CreateCard from '@/components/CreateCard/CreateCard';
import { cards } from '@/components/Cards';

const App = () => {
    return (
        <div className={classes.App}>
            <CreateCard all_cards={cards} />
        </div>
    );
};

export default App;
