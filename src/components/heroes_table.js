import { Table } from "antd";
import { useState } from "react";
import { getHeroTableColumns } from "../utils/heroes_table_columns";
import { getHeroStatWithLevel } from "../utils/process_hero_data";

const HeroesTable = ({ heroesData, level }) => {
  const [sortedInfo, setSortedInfo] = useState({
    columnKey: "hero_name",
    order: "ascend",
  });

  const heroStatWithLevel = heroesData.map((herodata) =>
    getHeroStatWithLevel(herodata, level)
  );

  const handleChange = (sorter) => {
    setSortedInfo(sorter);
  };

  return (
    <Table
      columns={getHeroTableColumns()}
      onChange={handleChange}
      dataSource={heroStatWithLevel}
      pagination={false}
      sortedInfo={sortedInfo}
    />
  );
};

export default HeroesTable;
