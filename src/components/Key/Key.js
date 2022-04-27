const Key = ({ text, className, keyAction }) => {
  return (
    <li>
      <button className={className} onClick={keyAction}>
        {text}
      </button>
    </li>
  );
};

export default Key;
