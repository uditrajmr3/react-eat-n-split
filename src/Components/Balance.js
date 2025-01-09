export default function Balance({ balanceAmount, friendName }) {
  // Convert balance into three distinct cases: 1 (positive), -1 (negative), or 0
  const balanceCase = Math.sign(balanceAmount);

  switch (balanceCase) {
    case 1:
      return (
        <p className="green">
          {friendName} owes you {balanceAmount}€
        </p>
      );
    case -1:
      return (
        <p className="red">
          You owe {friendName} {Math.abs(balanceAmount)}€
        </p>
      );
    case 0:
      return <p>You and {friendName} are even</p>;
    default:
      return <p>Invalid balance amount</p>;
  }
}
