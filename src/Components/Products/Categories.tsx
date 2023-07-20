import { Box, Grid, Link, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { categoryActions } from "../../store/CategorySlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

function LinkTab(props: any) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {}}
      {...props}
    />
  );
}

export const Categoreis = () => {
  var dispatch = useDispatch();
  var categories = useSelector((store: IStoreReducer) => store.category);
  var active = useSelector((store: IStoreReducer) => store.category.active);

  const categoryClickHandler = (categoryId: number) => {
    dispatch(categoryActions.setActive(categoryId));
  };

  return (
    <nav>
      <Box>
        <Tabs
          value={active}
          onChange={(e, val) => categoryClickHandler(val)}
          aria-label="icon label tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "#2db457" },
          }}
        >
          {categories.list.map((category) => (
            <LinkTab label={category.name} key={category.id} />
          ))}
        </Tabs>
      </Box>
    </nav>
  );
};
