import { Superhero } from "../../types/superhero";
import { TabName } from "../../types/tabs";
import { GridTab } from "./IndividualTabs/GridTab";
import { ListTab } from "./IndividualTabs/ListTab";

interface ActiveTabRendererProps {
  activeTab: TabName;
  data: Superhero[];
}

export const ActiveTabRenderer: React.FC<ActiveTabRendererProps> = ({
  activeTab,
  data,
}) => {
  switch (activeTab) {
    case TabName.GRID_TAB:
      return <GridTab data={data} />;
    default:
      return <ListTab data={data} />;
  }
};
