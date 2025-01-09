import { useState } from "react";

import { initialFriends } from "./lib/data/initial_friends";
import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";

export default function App() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  function ToggleShowAddFriendForm() {
    setShowAddFriendForm((show) => !show);
  }

  function AddNewFriend(newFriend) {
    setFriends((friends) => [newFriend, ...friends]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriendForm && <FormAddFriend formAction={AddNewFriend} />}
        <Button
          text={showAddFriendForm ? "Close Form" : "Add New Friend"}
          onClickHandler={ToggleShowAddFriendForm}
        />
      </div>
      <FormSplitBill />
    </div>
  );
}
