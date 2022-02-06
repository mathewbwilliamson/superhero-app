import React from "react";
import { useFetchData } from "../../customHooks/useFetchData";
import { Superhero } from "../../types/superhero";
import { TabName } from "../../types/tabs";
import { ActiveTabRenderer } from "./ActiveTabRenderer";
import { TabListButtons } from "./TabListButtons";

interface TabsContainerProps {}

// TODO: Eventually, there might be more tabs. A Configuration object would be a
// great improvement. Then Tabs would be really reusable.

export const TabsContainer: React.FC<TabsContainerProps> = () => {
  const [activeTab, setActiveTab] = React.useState<TabName>(TabName.LIST_TAB);
  const { data, isLoading } = useFetchData<Superhero[]>(
    "test-data/super-heroes.json"
  );
  console.log("\x1b[42m%s \x1b[0m", "FIXME: [matt] data", isLoading, data);
  const changeTab = (newTab: TabName) => {
    setActiveTab(newTab);
  };

  return (
    <>
      {!isLoading && !!data ? (
        <section>
          <TabListButtons activeTab={activeTab} onClick={changeTab} />
          <div className="tabs__outlet">
            <ActiveTabRenderer activeTab={activeTab} data={data} />
          </div>
        </section>
      ) : (
        <section>Loading...</section>
      )}
    </>
  );
};
