const Button = ({ bgcolor, color, size, text, borderRadius }) => {
  return (
    <button
      style={{ backgroundColor: bgcolor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};
export default Button;
