const Key = ({ text, className, action }) => {
  return (
    <li>
      <button className={className} onClick={action}>
        {text}
      </button>
    </li>
  );
};

export default Key;
