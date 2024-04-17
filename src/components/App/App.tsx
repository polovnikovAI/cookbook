import { FC } from 'react';
import * as classes from './App.module.sass';
import CookCard from '../CookCard/CookCard';

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <div className={classes.App}>
            <CookCard
                foodId={1}
                cookBy='knife'
                nameFood='салат'
                difficulty={1}
                timeCook={5}
                ingredients={['Салат айсберг', 'Помидоры', 'Огурцы', 'Соль', 'Перец', 'Майонез']}
            />
            <CookCard
                foodId={2}
                cookBy='pan'
                nameFood='яичница'
                difficulty={2}
                timeCook={5}
                ingredients={['Яйца', 'Соль', 'Перец']}
            />
        </div>
    );
};

export default App;
