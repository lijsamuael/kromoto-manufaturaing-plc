export default function Button({ text }) {
  return (
    <button
      className={` text-success-dark1  border-x-success-dark1 border-2 rounded-lg py-2 px-4 font-semibold tracking-wider inline-block`}
    >
      {text}
    </button>
  );
}
