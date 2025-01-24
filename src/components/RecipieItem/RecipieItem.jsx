export const RecipieItem = ({
  name,
  time,
  servings,
  calories,
  difficulty,
  image,
  clock: Clock,
  burger: Burger,
  star: Star,
  bowl: Bowl,
}) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>
        <Clock size = {20} />
        min: {time}
      </p>
      <p>
        <Bowl size = {20}/>
        servings: {servings}
      </p>
      <p>
        <Burger size = {20}/>
        calories: {calories}
      </p>
      <p>
        <Star size = {20}/>
        difficulty: {difficulty}
      </p>
      <img src={image} alt="" width="100px" />
    </li>
  );
};
