import { FC } from 'react';
import * as classes from './App.module.sass';
import CookCard from '../CookCard/CookCard';

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <div>
            <h1 className={classes.smth_class}>hello world</h1>
            <CookCard
                foodId={Date.now()}
                cookBy='сковорода'
                nameFood='яичница'
                difficulty={2}
                timeCook={10}
                ingredients={['яйца', 'соль', 'перец']}
            />
        </div>
    );
};

export default App;
