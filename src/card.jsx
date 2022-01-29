

function Card(props) {
    return(
        <div className="card">
            <h1>{props.titulo}</h1>
            <p>{props.text}</p>
            <a href={props.link}>Ver más</a>
        </div>
    );
};

export default Card;