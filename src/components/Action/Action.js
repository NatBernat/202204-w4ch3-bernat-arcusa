const Action = ({ text, className, action, href }) => {
  return (
    <a href={href} className={className} onClick={action}>
      {text}
    </a>
  );
};

export default Action;
