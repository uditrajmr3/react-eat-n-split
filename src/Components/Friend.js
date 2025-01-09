import Balance from "./Balance";
import Button from "./Button";

export default function Friend({ friendObj }) {
  return (
    <li>
      <img src={friendObj.image} alt={friendObj.name} />
      <h3>{friendObj.name}</h3>

      <Balance balanceAmount={friendObj.balance} friendName={friendObj.name} />
      <Button text="Select" />
    </li>
  );
}
