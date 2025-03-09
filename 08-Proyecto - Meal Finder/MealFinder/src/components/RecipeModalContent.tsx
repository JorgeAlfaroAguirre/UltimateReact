import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Image,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails | undefined;
};
``;

const joinIngridients = (data: MealDetails) => {
  let ingridients = [];
  for (let index = 1; index <= 20; index++) {
    const ingridient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingridient !== "") {
      ingridients.push(`${ingridient} - ${measure}`);
    }
  }
  return ingridients;
};
const RecipeModalContent = ({ data }: Props) => {
  const ingridients = data ? joinIngridients(data) : [];
  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          alt={data.strMeal}
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
        />
        <Heading mt="4" mb="4" size="md">
          Ingredientes
        </Heading>

        <OrderedList>
          {ingridients.map((ingridient) => (
            <ListItem key={ingridient}>{ingridient}</ListItem>
          ))}
        </OrderedList>

        <Text whiteSpace="pre-line" mt="4">
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
};

export default RecipeModalContent;
