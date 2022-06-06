import "./Card.css";

function Card({ flag, name, population, region, capital }) {
  return (
    <div className="card">
      <img className="card__image" src={flag} alt={name} />
      <div className="card__body">
        <h2 className="card__title">{name}</h2>
        <p className="card__paragraph">
          Population: <span>{population}</span>
        </p>
        <p className="card__paragraph">
          Region: <span>{region}</span>
        </p>
        <p className="card__paragraph">
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
