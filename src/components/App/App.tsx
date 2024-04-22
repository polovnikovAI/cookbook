import * as classes from './App.module.sass';
import PostCards from '../PostCards';

const App = () => {
    return (
        <div className={classes.App}>
            <PostCards />
        </div>
    );
};

export default App;
