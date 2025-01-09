import Balance from "./Balance";
import Button from "./Button";

export default function Friend({ friendObj, isSelected, onSelect }) {
  return (
    <li>
      <img src={friendObj.image} alt={friendObj.name} />
      <h3>{friendObj.name}</h3>

      <Balance balanceAmount={friendObj.balance} friendName={friendObj.name} />
      <Button
        text={isSelected ? "Close" : "Select"}
        onClickHandler={() => onSelect(isSelected ? null : friendObj)}
      />
    </li>
  );
}
