import { Table } from "antd";
import { useState } from "react";
import { getHeroTableColumns } from "../utils/heroes_table_columns";

const HeroesTable = ({ heroesData, level }) => {
  const [sortedInfo, setSortedInfo] = useState({
    columnKey: "hero_name",
    order: "ascend",
  });

  const heroStatWithLevel = heroesData.map((herodata) => {
    const { str, agi, int } = herodata;

    return {
      ...herodata,
      str: Number((str + level * herodata.str_gain).toFixed(2)),
      agi: Number((agi + level * herodata.agi_gain).toFixed(2)),
      int: Number((int + level * herodata.int_gain).toFixed(2)),
    };
  });

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
