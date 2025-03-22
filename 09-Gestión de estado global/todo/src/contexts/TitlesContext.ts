import { createContext } from "react";

type TitlesContextType = {
  todosTitle: string;
};
export default createContext<TitlesContextType>({} as TitlesContextType);
