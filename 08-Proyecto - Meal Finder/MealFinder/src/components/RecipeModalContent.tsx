import { MealDetails } from "../types";

type Props = {
  data: MealDetails | undefined;
};

const RecipeModalContent = ({ data }: Props) => {
  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
    </>
  );
};

export default RecipeModalContent;
