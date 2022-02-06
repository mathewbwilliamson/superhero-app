import classNames from "classnames";
import React from "react";
import { TabName } from "../../types/tabs";

interface TabListButtonsProps {
  activeTab: TabName;
  onClick: (newTab: TabName) => void;
}

export const TabListButtons: React.FC<TabListButtonsProps> = ({
  activeTab,
  onClick,
}) => {
  return (
    <ul className="tab-buttons">
      <li
        className={classNames(
          {
            active: activeTab === TabName.LIST_TAB,
          },
          "tab"
        )}
        onClick={() => onClick(TabName.LIST_TAB)}
      >
        List
      </li>
      <li
        className={classNames(
          {
            active: activeTab === TabName.GRID_TAB,
          },
          "tab"
        )}
        onClick={() => onClick(TabName.GRID_TAB)}
      >
        Grid
      </li>
    </ul>
  );
};
