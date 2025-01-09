import Friend from "./Friend";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friendObj={friend} />
      ))}
    </ul>
  );
}
