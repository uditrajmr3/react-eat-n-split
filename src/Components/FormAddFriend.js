import Button from "./Button";
import { useState } from "react";

export default function FormAddFriend({ formAction }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function resetForm() {
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  function addFriend(e) {
    e.preventDefault();

    if (name.trim().length === 0) {
      alert("Name cannot be empty");
      return;
    }

    if (image.trim().length === 0) {
      alert("Image cannot be empty");
      return;
    }

    const id = crypto.randomUUID();

    const newFriend = {
      id: id,
      name: name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    formAction(newFriend);
    resetForm();
  }

  return (
    <form className="form-add-friend" onSubmit={addFriend}>
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onInput={(e) => setImage(e.target.value)}
      />

      <Button text="Add Friend" />
    </form>
  );
}
