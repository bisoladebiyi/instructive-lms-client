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
            borderRadius: "12px !important",
            border: "1px solid #f3f4f6",
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            "&:before": { display: "none" },
            transition: "all 0.2s",
            "&:hover": {
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            },
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#6b7280" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              bgcolor: "#fafafa",
              px: 3,
              py: 1,
              minHeight: 56,
              "& .MuiAccordionSummary-content": { my: 1.5 },
              "& .MuiTypography-root": { fontWeight: 600, fontSize: "0.875rem", color: "#111827" },
            }}
          >
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              px: 3,
              py: 2.5,
              borderTop: "1px solid #f3f4f6",
              bgcolor: "white",
            }}
          >
            {item.content}
          </AccordionDetails>

          {item.actions && (
            <AccordionActions sx={{ px: 3, pb: 2, borderTop: "1px solid #f3f4f6" }}>
              {item.actions}
            </AccordionActions>
          )}
        </Accordion>
      ))}
    </div>
  );
};

export default ReusableAccordion;
