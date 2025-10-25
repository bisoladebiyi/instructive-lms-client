import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { IReusableAccordion } from "../../interfaces/Accordion.interface";

const ReusableAccordion = ({ items }: IReusableAccordion) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <Accordion
          key={index}
          defaultExpanded={item.defaultExpanded}
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
            "&:before": { display: "none" }, // Remove default divider
            transition: "all 0.3s",
            "&:hover": {
              boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              bgcolor: "grey.50",
              borderRadius: 2,
              px: 3,
              py: 2,
              "& .MuiTypography-root": { fontWeight: 500, fontSize: "1rem" },
            }}
          >
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              px: 3,
              py: 2,
              borderTop: "1px solid rgba(0,0,0,0.05)",
              bgcolor: "background.paper",
            }}
          >
            {item.content}
          </AccordionDetails>

          {item.actions && (
            <AccordionActions sx={{ px: 3, pb: 2 }}>
              {item.actions}
            </AccordionActions>
          )}
        </Accordion>
      ))}
    </div>
  );
};

export default ReusableAccordion;
