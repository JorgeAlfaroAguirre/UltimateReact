import { ReactNode, useState } from "react";
import UserContext from "../contexts/UserContext";

type Props = {
  children: ReactNode;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<{ name: string }>({ name: "Sofia" });
  const toggleLogin = () => {
    setUser({ name: user.name === "Sofia" ? "Catalina" : "Sofia" });
  };
  return (
    <UserContext.Provider value={{ user, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
}
