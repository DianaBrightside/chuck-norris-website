import React from "react";
import { Box } from "@material-ui/core";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Joke from "./components/Joke";

function App() {
  return (
    <Box>
      <Header />
      <Categories />
      <Joke />
    </Box>
  );
}

export default App;
