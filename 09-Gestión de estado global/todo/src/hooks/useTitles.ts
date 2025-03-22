import { useContext } from "react";
import TitlesContext from "../contexts/TitlesContext";

export default function useTitles() {
  return useContext(TitlesContext);
}
