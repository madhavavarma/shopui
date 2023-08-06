import { Box, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { categoryActions } from "../../store/CategorySlice";

const SubCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store: IStoreReducer) => store.category.list);
  const active = useSelector((store: IStoreReducer) => store.category.active);
  const subActive = useSelector(
    (store: IStoreReducer) => store.category.subActive
  );

  const activeCategory = categories?.find((cat) => cat.id == active);

  const handleCatClick = (id: number) => {
    dispatch(categoryActions.setSubActive(id));
  };

  return (
    <Box>
      <Grid display="flex" pt={2} gap={2} alignItems={"center"} sx={{}}>
        <Button
          sx={{
            color: subActive == -1 ? "#f9f9f9 !important" : "",
            backgroundColor: subActive == -1 ? "#2db457 !important" : "",
            fontSize: "0.7rem !important",
            fontWeight: "bold",
            letterSpacing: 0.6,
          }}
          onClick={(e) => handleCatClick(-1)}
        >
          {"ALL"}
        </Button>
        {activeCategory?.subCategories?.map((subCat) => (
          <Grid item xs="auto" key={subCat.id}>
            <Button
              onClick={(e) => handleCatClick(subCat.id)}
              sx={{
                color: subActive == subCat.id ? "#f9f9f9 !important" : "",
                backgroundColor:
                  subActive == subCat.id ? "#2db457 !important" : "",
                fontSize: "0.7rem !important",
                fontWeight: "bold",
                letterSpacing: 0.6,
              }}
            >
              {subCat.categoryName}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SubCategories;
