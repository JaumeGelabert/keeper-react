import Card from './card';
import cardsInfo from './cardInfo';

function CreateCards(card) {
    return(
        <Card titulo={card.titulo} text={card.texto} link={card.link} />
    );
};

function Content() {
    return(
        <div className="content">
            {cardsInfo.map(CreateCards)}
        </div>
    );
}

export default Content;