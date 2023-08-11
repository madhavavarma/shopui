import { Box, Button, Container, Divider, Grid, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { ProductActions } from "../../store/ProductSlice";
import { categoryActions } from "../../store/CategorySlice";

export const Categoreis = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store: IStoreReducer) => store.category.list);
  const active = useSelector((store: IStoreReducer) => store.category.active);

  const handleCategoryClick = (id: number) => {
    dispatch(categoryActions.setActive(id));
  };

  return (
    <nav>
      <Box className="navClass">
        <Container>
          <Grid display="flex" flexDirection="column">
            <Grid display="flex" gap={2} alignItems={"center"}>
              {categories.map((x) => (
                <Grid item xs="auto" key={x.id}>
                  <Link
                    href="#"
                    underline="none"
                    variant="button"
                    onClick={(e) => handleCategoryClick(x.id)}
                    sx={{
                      borderRadius: "2px",
                      display: "inline-block",
                      position: "relative",
                      left: "-3px",
                      margin: "3px",

                      padding: "3px 7px",
                      letterSpacing: "1px",
                      backgroundColor: active != x.id ? "" : "#fff !important",
                      color:
                        active != x.id
                          ? "#fff !important"
                          : "#2db457 !important",
                      "&:hover": {
                        color: "#240303",
                      },
                    }}
                  >
                    {x.categoryName}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </nav>
  );
};