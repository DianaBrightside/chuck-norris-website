import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";

import * as actions from "../redux/actions";

const useStyles = makeStyles({
  button: {
    boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.3)",
    fontWeight: 800,
    backgroundColor: "#fff",
    minWidth: 170,
    padding: "15px 0",
    borderRadius: "20px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#422ED4",
      color: "#fff",
    },
  },
  button_selected: {
    boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.3)",
    fontWeight: 800,
    color: "#fff",
    backgroundColor: "#422ED4",
  },
});

const CategoriesList = ({ categories }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(({ category }) => category);

  const classes = useStyles();
  function onCategorySelect(event) {
    event.preventDefault();
    const clickedCaterogy = event.target.innerText;
    dispatch(actions.setCaterogy(clickedCaterogy));
  }
  return categories.map((category, index) => (
    <Box component={Grid} item xs={2} key={index}>
      <Button
        onClick={onCategorySelect}
        className={
          category === selectedCategory
            ? classes.button_selected
            : classes.button
        }
        variant="contained"
        key={index}
      >
        {category}
      </Button>
    </Box>
  ));
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        setCategories(response.data);
        setError(false);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <Box margin="auto" width={1120}>
      <Typography align="center" variant="h1" color="secondary">
        Categories
      </Typography>
      <Box
        id="categories"
        justify="center"
        spacing={3}
        component={Grid}
        container
      >
        {error ? (
          "No categories found"
        ) : (
          <CategoriesList categories={categories} />
        )}
      </Box>
    </Box>
  );
}

export { CategoriesList };

export default Categories;
