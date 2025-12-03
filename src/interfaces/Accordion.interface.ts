export interface IAccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
  actions?: React.ReactNode;
  defaultExpanded?: boolean;
}

export interface IReusableAccordion {
  items: IAccordionItem[];
}