import * as classes from './App.module.sass';
import CookCard from '../CookCard/CookCard';

const App = () => {
    return (
        <div className={classes.App}>
            <CookCard
                cookBy='knife'
                nameFood='салат'
                difficulty={1}
                timeCook={10}
                price={200}
                ingredients={['Салат айсберг', 'Помидоры', 'Огурцы', 'Соль', 'Перец', 'Майонез']}
            />
            <CookCard
                cookBy='question'
                nameFood='яичница с тестом'
                difficulty={1}
                timeCook={10}
                ingredients={['Яйца', 'Мука', 'Вода', 'Соль']}
            />
            <CookCard
                cookBy='pan'
                nameFood='яичница'
                difficulty={1}
                timeCook={5}
                ingredients={['Яйца', 'Соль', 'Перец']}
            />
            <CookCard
                cookBy='pot'
                nameFood='макароны'
                difficulty={2}
                price={80}
                timeCook={15}
                ingredients={['Макароны', 'Соль']}
            />
            <CookCard
                cookBy='oven'
                nameFood='Запеченая курица'
                difficulty={3}
                price={350}
                timeCook={60}
                ingredients={['Курица', 'Соль', 'Перец', 'Паприка', 'Сухой чеснок']}
            />
            <CookCard
                cookBy='microwave'
                nameFood='чебупели'
                price={180}
                difficulty={0}
                timeCook={3}
                ingredients={['Чебупели']}
            />
            <CookCard
                cookBy='pot'
                nameFood='куриный суп'
                price={450}
                difficulty={3}
                timeCook={5}
                ingredients={['Макароны', 'Курица', 'Картофель', 'Морковь', 'Лук', 'Соль']}
            />
            <CookCard
                cookBy='nothing'
                nameFood='копченая курица'
                difficulty={0}
                timeCook={0}
                price={220}
                ingredients={['Копченая курица']}
            />
        </div>
    );
};

export default App;
