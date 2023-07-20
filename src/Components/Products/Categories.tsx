import { Container, Grid, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { ProductActions } from "../../store/ProductSlice";
import { categoryActions } from "../../store/CategorySlice";

export const Categoreis = () => {

  const dispatch = useDispatch();
  const categories = useSelector((store: IStoreReducer) => store.category.list);
  const active = useSelector((store: IStoreReducer) => store.category.active);

  const handleCategoryClick = (id: number) => {
    dispatch(categoryActions.setActive(id))
  }

  return (
    <nav className="navClass">
      <Container>
        <Grid display="flex" gap={2} alignItems={"center"}>
          {categories.map(x => <Grid item xs="auto">
            <Link
              href="#"
              underline="none"
              variant="button"
              onClick = {e => handleCategoryClick(x.id)}
              sx={{
                borderRadius: "2px",
                display: "inline-block",
                position: "relative",
                left: "-3px",
                margin: "3px",

                padding: "3px 7px",
                letterSpacing: "1px",
                backgroundColor: active != x.id ? "": "#fff !important",
                color: active != x.id ? "#fff !important": "#2db457 !important",
                "&:hover": {
                  color: "#240303"
                },
              }}
            >
              {x.name}
            </Link>
          </Grid>)}
          
        </Grid>
      </Container>
    </nav>
  );
};