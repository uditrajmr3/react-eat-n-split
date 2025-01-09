const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
      </div>
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friendObj={friend} />
      ))}
    </ul>
  );
}

function Friend({ friendObj }) {
  return (
    <li>
      <img src={friendObj.image} alt={friendObj.name} />
      <h3>{friendObj.name}</h3>

      <Balance balanceAmount={friendObj.balance} friendName={friendObj.name} />
    </li>
  );
}

function Balance({ balanceAmount, friendName }) {
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
