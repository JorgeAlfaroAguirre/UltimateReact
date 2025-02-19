import { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";

type Props = {
  children: ReactNode;
  variant?: variant;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: Props) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
