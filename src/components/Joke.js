import { makeStyles, Card, Typography, Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Chuck from "../images/chuck.png";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#422ED4",
    color: "#fff",
    position: "relative",
    boxShadow: "0px 50px 50px 0px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
    width: "90%",
    minHeight: "160px",
    margin: "165px auto",
  },
  chuck: {
    position: "absolute",
    zIndex: 0,
    top: "-155px",
    right: "100px",
  },
});

function Joke() {
  const [joke, setJoke] = useState({});
  const selectedCategory = useSelector(({ category }) => category);
  useEffect(() => {
    async function fetchData() {
      let params = selectedCategory ? { category: selectedCategory } : {};
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random",
          { params }
        );
        setJoke(response.data);
      } catch {
        setJoke({});
      }
    }
    fetchData();
  }, [selectedCategory]);

  const classes = useStyles();
  return (
    <Box margin="auto" width={1120} position="relative">
      <img className={classes.chuck} src={Chuck} alt="Chuck Norris" />
      <Card className={classes.card}>
        <Typography id="card_joke" variant="h3" align="center">
          {joke.value}
        </Typography>
      </Card>
    </Box>
  );
}
export default Joke;
