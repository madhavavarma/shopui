import { Grid, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { categoryActions } from "../../store/CategorySlice";

export const Categoreis = () => {
  var dispatch = useDispatch();
  var categories = useSelector((store: IStoreReducer) => store.category);

  const categoryClickHandler = (categoryId: number) => {
    dispatch(categoryActions.setActive(categoryId));
  };

  return (
    <nav>
      <Grid container pt={2} spacing={4}>
        {categories.list.map((category) => (
          <Grid item xs="auto" key={category.id}>
            <Link
              href="#"
              underline="none"
              variant="button"
              onClick={(e) => categoryClickHandler(category.id)}
              sx={{
                letterSpacing: "1px",
                borderBottom:
                  categories.active == category.id
                    ? "3px solid #2db457"
                    : "3px dashed #2db457",
                paddingBottom: "5px",
                "&:hover": {
                  borderBottom: "3px solid #2db457",
                },
              }}
            >
              {category.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </nav>
  );
};
