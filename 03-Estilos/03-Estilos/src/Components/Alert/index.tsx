import React, { ReactNode } from "react";
import styles from "./Alert.module.css";

type Props = {
  children: ReactNode;
  status: boolean;
  onClick: () => void;
};

const Alert = ({ children, status, onClick }: Props) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className={[
        styles.alert,
        status ? styles.alertActive : styles.alertInactive,
      ].join(" ")}
      onClick={onClick}
    >
      {childrenArray.length > 1
        ? status
          ? childrenArray[0]
          : childrenArray[1]
        : children}
    </div>
  );
};

export default Alert;
