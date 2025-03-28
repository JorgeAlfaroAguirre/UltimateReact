import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Meal } from "../types/index";

type Props = {
  meal: Meal;
  openRecipe: () => void;
};

const MealCard = ({ meal: m, openRecipe }: Props) => {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image
          width="100%"
          borderRadius="lg"
          src={m.strMealThumb}
          alt={m.strMeal}
        />
        <Heading size="md" color="blue.400">
          <Text mt="4">{m.strMeal}</Text>
        </Heading>
      </CardBody>

      <CardFooter pt="0">
        <Button onClick={openRecipe} bgColor="blue.400" color="white">
          Ver receta
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
