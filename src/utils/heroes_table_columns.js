import { Space, Image, Tag } from "antd";

import get_hero_icon from "./get_heroes_icon";
import getColorAndNameOfAttribute from "./get_color";

export const getHeroTableColumns = () => [
  {
    title: "Name",
    dataIndex: "id",
    key: "id",
    sorter: {
      compare: (a, b) => a.id.name.localeCompare(b.id.name),
      multiple: 1,
    },
    defaultSortOrder: "ascend",
    render: (id) => {
      return (
        <Space size={12}>
          <Image width={15} src={get_hero_icon(id.icon)} />
          <span>{id.name}</span>
        </Space>
      );
    },
  },
  {
    title: "Attribute",
    dataIndex: "attribute",
    key: "attribute",
    render: (_, hero) => {
      const colorAndName = getColorAndNameOfAttribute(hero.attribute);
      return <Tag color={colorAndName[0]}>{colorAndName[1]}</Tag>;
    },
    sorter: (a, b) => a.attribute.localeCompare(b.attribute),
  },
  {
    title: "Str",
    dataIndex: "str",
    key: "str",
    sorter: (a, b) => a.str - b.str,
  },
  {
    title: "Agi",
    dataIndex: "agi",
    key: "agi",
    sorter: (a, b) => a.agi - b.agi,
  },
  {
    title: "Int",
    dataIndex: "int",
    key: "int",
    sorter: (a, b) => a.int - b.int,
  },
  {
    title: "Str Gain",
    dataIndex: "str_gain",
    key: "str_gain",
    sorter: (a, b) => a.str_gain - b.str_gain,
  },
  {
    title: "Agi Gain",
    dataIndex: "agi_gain",
    key: "agi_gain",
    sorter: (a, b) => a.agi_gain - b.agi_gain,
  },
  {
    title: "Int Gain",
    dataIndex: "int_gain",
    key: "int_gain",
    sorter: (a, b) => a.int_gain - b.int_gain,
  },
  {
    title: "Attack Damage",
    dataIndex: "attack_damage",
    key: "attack_damage",
    render: (_, hero) => (
      <span>
        {hero.attack_min} - {hero.attack_max}
      </span>
    ),
  },
];
