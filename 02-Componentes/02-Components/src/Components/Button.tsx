type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
  buttonType?: string;
};

const Button = ({
  children,
  isLoading = false,
  onClick,
  buttonType,
}: Props) => {
  const buttonClass = buttonType
    ? "btn btn-danger"
    : `btn btn-${isLoading ? "secondary" : "primary"}`;

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={buttonClass}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
