import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
import Paper from "@mui/material/Paper";
import { allNews } from "./news";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NewsTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "100%" }} elevation={4}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable tabs"
          variant="scrollable"
        >
          <Tab label="آموزشی" {...a11yProps(0)} />
          <Tab label="دانشجویی" {...a11yProps(1)} />
          <Tab label="فرهنگی" {...a11yProps(2)} />
          <Tab label="پژوهشی" {...a11yProps(3)} />
          <Tab label="سایر" {...a11yProps(4)} />
        </Tabs>
      </Box>
      {allNews.map((news, i) => (
        <TabPanel key={i} value={value} index={i}>
          {news}
        </TabPanel>
      ))}
    </Paper>
  );
}
