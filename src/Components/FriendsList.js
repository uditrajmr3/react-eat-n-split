import Friend from "./Friend";

export default function FriendsList({
  friends,
  selectedFriend,
  handleSelectFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friendObj={friend}
          isSelected={
            selectedFriend !== null && selectedFriend.id === friend.id
          }
          onSelect={handleSelectFriend}
        />
      ))}
    </ul>
  );
}
