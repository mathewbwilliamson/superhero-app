import React from "react";
import { Superhero } from "../../../types/superhero";
import "./gridTabStyles.css";

interface GridTabProps {
  data: Superhero[];
}

export const GridTab: React.FC<GridTabProps> = ({ data }) => {
  return (
    <ul className="grid-tab stylized-interior">
      <article className="comic">
        {data.map((hero) => (
          <div className="panel" key={hero.id}>
            <p className="text top-left">{hero.name}</p>
          </div>
        ))}
      </article>
    </ul>
  );
};
