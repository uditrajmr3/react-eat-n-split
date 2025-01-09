import { useState } from "react";

import { initialFriends } from "./lib/data/initial_friends";
import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";

export default function App() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleShowAddFriendForm() {
    setShowAddFriendForm((show) => !show);
  }

  function addNewFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriendForm(false);
  }

  function updateExistingFriend(updatedFriend) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === updatedFriend.id ? updatedFriend : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          handleSelectFriend={setSelectedFriend}
        />

        {/* show Add Friend Form only when showAddFriendForm is true */}
        {showAddFriendForm && <FormAddFriend formAction={addNewFriend} />}

        {/* toggle button text from add friend to close and vice-versa  */}
        <Button
          text={showAddFriendForm ? "Close Form" : "Add New Friend"}
          onClickHandler={toggleShowAddFriendForm}
        />
      </div>

      {/* show bill slpit form only when a friend is selected  */}
      {selectedFriend && (
        <FormSplitBill
          friend={selectedFriend}
          onBillSplit={updateExistingFriend}
        />
      )}
    </div>
  );
}
