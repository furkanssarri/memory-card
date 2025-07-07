const Card = ({ name, image }) => {
  return (
    <div>
      <div className="card">
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Card;
