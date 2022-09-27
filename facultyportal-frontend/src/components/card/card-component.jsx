import './card.styles.css';

function Card ({ course }) {
  const { id, name, email } = course;

  return (
    <div className='card-container'>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;