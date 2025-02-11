import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

const Button = ({ children, isLoading = false, onClick }: Props) => {
  const className = `${isLoading ? styles.disableButton : styles.button} ${
    styles.padded
  }`;
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
