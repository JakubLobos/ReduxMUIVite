import { Container, Grid, Typography } from "@mui/material";
import ArticleCard from "../../common/components/ArticleCard";
import { useSelector } from "react-redux";
import { User } from "../../../slices/authSlice";
import { RootState } from "../../../store";

const Home = () => {
  const user: User = useSelector((state: RootState) => state.auth.user);
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "2em 0em 5em 0em",
        bgcolor: "#cfe8fc",
        minHeight: "100vh",
      }}
    >
      <Typography
        fontSize={32}
        align="center"
        padding={1}
        variant="h1"
        gutterBottom
      >
        Articles
      </Typography>
      <Typography onClick={() => console.log(user)} variant="h2">
        Welcome {user.name}!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ArticleCard
            title={"Iguana"}
            imgSrc={
              "https://static.inaturalist.org/photos/95742200/medium.jpeg"
            }
            desc={"Id like to touch her"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ArticleCard
            title={"Iguana"}
            imgSrc={
              "https://static.inaturalist.org/photos/95742200/medium.jpeg"
            }
            desc={"Id like to touch her"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ArticleCard
            title={"Iguana"}
            imgSrc={
              "https://static.inaturalist.org/photos/95742200/medium.jpeg"
            }
            desc={"Id like to touch her"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ArticleCard
            title={"Iguana"}
            imgSrc={
              "https://static.inaturalist.org/photos/95742200/medium.jpeg"
            }
            desc={"Id like to touch her"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ArticleCard
            title={"Iguana"}
            imgSrc={
              "https://static.inaturalist.org/photos/95742200/medium.jpeg"
            }
            desc={"Id like to touch her"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ArticleCard
            title={"Iguana"}
            imgSrc={
              "https://static.inaturalist.org/photos/95742200/medium.jpeg"
            }
            desc={"Id like to touch her"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
