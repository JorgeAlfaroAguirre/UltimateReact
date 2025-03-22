import { ReactNode, useState } from "react";
import TitlesContext from "../contexts/TitlesContext";

type Props = {
  children: ReactNode;
};

export default function TitlesProvider({ children }: Props) {
  const [titles] = useState({ todosTitle: "-- Todos --" });
  return (
    <TitlesContext.Provider value={titles}>{children}</TitlesContext.Provider>
  );
}
