import React from "react";
import { Superhero } from "../../../types/superhero";
import "./listTab.css";

interface ListTabProps {
  data: Superhero[];
}

export const ListTab: React.FC<ListTabProps> = ({ data }) => {
  return (
    <div className="list-tab__container stylized-interior">
      <table className="list-tab">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Real Name</th>
        </tr>
        {data.map((hero) => (
          <tr key={hero.id}>
            <td>{hero.id}</td>
            <td>{hero.name}</td>
            <td>{hero.biography["full-name"]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
