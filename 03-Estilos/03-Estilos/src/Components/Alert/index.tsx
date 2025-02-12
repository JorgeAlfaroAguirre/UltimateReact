import React, { ReactNode } from "react";
import styles from "./Alert.module.css";
import { IoIosSend } from "react-icons/io";
import { FaHourglassEnd } from "react-icons/fa";
type Props = {
  children: ReactNode;
  status: boolean;
  onClick: () => void;
};

const Alert = ({ children, status, onClick }: Props) => {
  const childrenArray = React.Children.toArray(children);
  const icon = status ? <IoIosSend /> : <FaHourglassEnd />;
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
        : children}{" "}
      <span style={{ position: "relative", top: 2 }}>{icon}</span>
    </div>
  );
};

export default Alert;
