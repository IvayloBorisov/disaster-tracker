import styles from "./Button.module.css";

const Button = ({ name, content, onClick }) => {
  return (
    <button onClick={onClick} name={name} className={styles[`btn-${name}`]}>
      {content}
    </button>
  );
};

export default Button;
