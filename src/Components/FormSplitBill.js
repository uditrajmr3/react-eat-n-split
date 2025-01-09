import Button from "./Button";
import { useState } from "react";

export default function FormSplitBill({ friend, onBillSplit }) {
  const [myBill, setMyBill] = useState("");
  const [totalBill, setTotalBill] = useState("");
  const [payer, setPayer] = useState("user");

  function updateTotalBill(e) {
    setTotalBill(Number(e.target.value));
  }

  function updateMyBill(e) {
    const amount = Number(e.target.value);

    if (amount < totalBill) {
      setMyBill(amount);
    } else if (amount === totalBill) {
      alert("No amount left to split");
    } else {
      alert("Your bill cannot be greater than total bill");
    }
  }

  function updatePayer(e) {
    setPayer(e.target.value);
    console.log(e.target.value);
  }

  function splitBill(e) {
    e.preventDefault();

    let balance = 0;

    /* step 1: who's paying the bill? */
    if (payer === "user") {
      /* step 2: calculate balance (should be positive) */
      balance = totalBill - myBill;
    } else {
      /* step 2: calculate balance (should be negative) */
      balance = myBill - totalBill;
    }

    /* update the balance for the friend */
    const updatedFriend = { ...friend, balance: balance };
    onBillSplit(updatedFriend);
  }

  return (
    <form className="form-split-bill" onSubmit={splitBill}>
      <h2>Split a Bill with {friend.name}</h2>

      <label>Bill Value</label>
      <input type="text" value={totalBill} onInput={updateTotalBill} />

      <label>Your Expense</label>
      <input type="text" value={myBill} onInput={updateMyBill} />

      <label>{friend.name}'s Expense</label>
      <input type="text" disabled value={totalBill - myBill} />

      <label>Who is paying the bill?</label>
      <select value={payer} onChange={updatePayer}>
        <option value="user">Me</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button text="Split Bill" />
    </form>
  );
}
