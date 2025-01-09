export default function Button({ text, onClickHandler }) {
  return (
    <button className="button" onClick={onClickHandler}>
      {text}
    </button>
  );
}
