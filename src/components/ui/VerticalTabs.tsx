import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { a11yProps } from "../../utils/helper";
import type {
  TabPanelProps,
  VerticalTabsProps,
} from "../../interfaces/VerticalTabs.interface";

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      className="h-full w-full overflow-auto"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const VerticalTabs = ({ tabs }: VerticalTabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "white",
        display: "flex",
        height: 500,
        borderRadius: "12px",
        border: "1px solid #f3f4f6",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        overflow: "hidden",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{
          borderRight: 1,
          borderColor: "#f3f4f6",
          minWidth: 180,
          bgcolor: "#fafafa",
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
            alignItems: "flex-start",
            textAlign: "left",
            color: "#6b7280",
            px: 3,
            py: 1.5,
          },
          "& .Mui-selected": {
            color: "#4f46e5 !important",
            bgcolor: "white",
          },
          "& .MuiTabs-indicator": {
            left: 0,
            right: "auto",
            width: 3,
            backgroundColor: "#4f46e5",
            borderRadius: "0 4px 4px 0",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default VerticalTabs;
