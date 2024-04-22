import { cards } from './Cards';
import CookCard from './CookCard/CookCard';

const PostCard = () => {
    return (
        <div>
            {cards.map((card) => (
                <CookCard foodOptions={card} />
            ))}
        </div>
    );
};

export default PostCard;
