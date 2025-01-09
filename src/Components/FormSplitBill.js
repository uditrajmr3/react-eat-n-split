import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with %FRIEND%</h2>

      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label>Friend's Expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill?</label>
      <select>
        <option value="user">Me</option>
        <option value="friend">My Friend</option>
      </select>

      <Button text="Split Bill" />
    </form>
  );
}
