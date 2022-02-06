import React from "react";
import { Superhero } from "../../../types/superhero";

interface ListTabProps {
  data: Superhero[];
}

export const ListTab: React.FC<ListTabProps> = ({ data }) => {
  return (
    <ul className="list-tab">
      {data.map((hero) => (
        <li key={hero.id}>
          <span>{hero.id}</span>
          <span>{hero.name}</span>
          <span>{hero.biography["full-name"]}</span>
        </li>
      ))}
    </ul>
  );
};
