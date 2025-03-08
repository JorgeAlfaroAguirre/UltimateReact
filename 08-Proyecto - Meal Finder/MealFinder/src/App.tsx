import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { Category, Meal } from "./types";
import useHttpData from "./hooks/useHttpData";
import { SearchForm } from "./types/index";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const makeMealUrl = (category: Category) => {
  return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;
};
const defaultCategory = {
  strCategory: "Seafood",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);
  const { loading, data } = useHttpData<Category>(url);
  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    seLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  const searchApi = (SearchForm: SearchForm) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchForm.search}`;
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(url)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));
  };

  return (
    <>
      <Grid
        templateAreas={`
          "header header"
          "nav main"
        `}
        gridTemplateRows={"60px 1fr 30px"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
        fontSize={14}
      >
        <GridItem
          boxShadow="lg"
          zIndex="1"
          pos="sticky"
          top="0"
          pt="7px"
          bg="white"
          area={"header"}
          overflowY={"auto"}
        >
          <Header onSubmit={searchApi} />
        </GridItem>

        <GridItem
          pos="sticky"
          top="60px"
          left="0"
          p="5"
          area={"nav"}
          height="calc(100vh - 60px)"
        >
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>

        <GridItem p="4" bg="gray.100" area={"main"}>
          <MainContent
            openRecipe={onOpen}
            loading={loadingMeal}
            meals={dataMeal}
          />
        </GridItem>
      </Grid>
      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
