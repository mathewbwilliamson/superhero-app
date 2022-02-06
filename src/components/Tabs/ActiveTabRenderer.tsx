import { TabName } from "../../types/tabs";
import { GridTab } from "./IndividualTabs/GridTab";
import { ListTab } from "./IndividualTabs/ListTab";

interface ActiveTabRendererProps {
  activeTab: TabName;
}

export const ActiveTabRenderer: React.FC<ActiveTabRendererProps> = ({
  activeTab,
}) => {
  switch (activeTab) {
    case TabName.GRID_TAB:
      return <GridTab />;
    default:
      return <ListTab />;
  }
};
