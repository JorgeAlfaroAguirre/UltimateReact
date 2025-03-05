import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { Category } from "./types";
import useHttpData from "./hooks/useHttpData";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    strCategory: "Beef",
  });
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const { loading, data } = useHttpData<Category>(url);
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
        <GridItem pl="2" bg="orange.300" area={"header"}>
          <Header />
        </GridItem>

        <GridItem p="5" area={"nav"} height="calc(100vh - 60px)">
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>

        <GridItem pl="2" bg="green.300" area={"main"}>
          <MainContent />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
