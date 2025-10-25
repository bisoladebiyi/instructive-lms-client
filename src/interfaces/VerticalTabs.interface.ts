export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface TabData {
  label: string;
  content: React.ReactNode;
}

export interface VerticalTabsProps {
  tabs: TabData[];
}