export interface IAccordionItem {
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  defaultExpanded?: boolean;
}

export interface IReusableAccordion {
  items: IAccordionItem[];
}