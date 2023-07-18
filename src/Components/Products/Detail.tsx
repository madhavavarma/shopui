import React from "react";
import {
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Detail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Detail Page
      </Typography>
      <Card>
        <CardContent>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Product tabs"
            >
              <Tab label="Overview" />
              <Tab label="Specifications" />
              <Tab label="Reviews" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Typography variant="h6" gutterBottom>
              Product Overview
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non aliquet risus. Phasellus gravida quam nec justo eleifend
              consequat. Pellentesque euismod tincidunt sem, at pharetra felis
              hendrerit vitae. Proin elementum mauris id orci elementum, vel
              congue nisl tristique.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h6" gutterBottom>
              Product Specifications
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non aliquet risus. Phasellus gravida quam nec justo eleifend
              consequat. Pellentesque euismod tincidunt sem, at pharetra felis
              hendrerit vitae. Proin elementum mauris id orci elementum, vel
              congue nisl tristique.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h6" gutterBottom>
              Product Reviews
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non aliquet risus. Phasellus gravida quam nec justo eleifend
              consequat. Pellentesque euismod tincidunt sem, at pharetra felis
              hendrerit vitae. Proin elementum mauris id orci elementum, vel
              congue nisl tristique.
            </Typography>
          </TabPanel>
        </CardContent>
      </Card>
    </div>
  );
};

function TabPanel({ children, value, index }: any) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default Detail;
