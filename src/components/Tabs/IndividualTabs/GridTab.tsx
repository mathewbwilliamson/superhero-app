import React from "react";
import { Superhero } from "../../../types/superhero";

interface GridTabProps {
  data: Superhero[];
}

export const GridTab: React.FC<GridTabProps> = ({ data }) => {
  return (
    <ul className="grid-tab">
      {data.map((hero) => (
        <li key={hero.id}>
          <span>{hero.image.url}</span>
          <span>{hero.name}</span>
        </li>
      ))}
    </ul>
  );
};
