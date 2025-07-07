const Card = ({ name, image, onClick }) => {
  return (
    <div>
      <div className="card" onClick={onClick}>
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Card;
