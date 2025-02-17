import { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";

type Props = {
  children: ReactNode;
  variant?: variant;
};

const Button = ({ children, variant = "primary" }: Props) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};

export default Button;
