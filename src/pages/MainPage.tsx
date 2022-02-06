import React from "react";
import { TabsContainer } from "../components/Tabs/TabsContainer";

interface MainPageProps {}
export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <main>
      <TabsContainer />
    </main>
  );
};
