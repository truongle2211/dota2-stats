import { useEffect, useState } from "react";
import { Layout, Menu, theme, Row, Col, Slider, InputNumber } from "antd";
import HeroesTable from "./components/heroes_table";
import Seperator from "./components/separator";
import SearchBox from "./components/searchbox";
import { processHeroData } from "./utils/process_hero_data";

import data from "./data/data.json";

const { Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [heroesData, setHeroesData] = useState([]);
  const [filteredHero, setFilteredHero] = useState([]);
  const [current, setCurrent] = useState("heroes");
  const [level, setLevel] = useState(1);
  const [keyword, setKeyword] = useState("");
  const items = [
    {
      label: "Heroes",
      key: "heroes",
    },
  ];

  const onClickHeader = (e) => {
    setCurrent(e.key);
  };

  const onChangeSlider = (inputLevelValue) => {
    setLevel(inputLevelValue);
  };

  const onChangeSearchBox = (e) => {
    setKeyword(e.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    setHeroesData(data.map((hero) => processHeroData(hero)));
  }, []);

  useEffect(() => {
    const filteredHeroes = heroesData.filter((hero) =>
      hero.id.name.toLocaleLowerCase().includes(keyword)
    );
    setFilteredHero(filteredHeroes);
  }, [heroesData, keyword]);

  return (
    <div className="App">
      <Layout className="layout">
        <Menu
          onClick={onClickHeader}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >
            <Seperator />

            <Row>
              <Col span={19}></Col>
              <Col span={5}>
                <SearchBox onChangeSearchBox={onChangeSearchBox} />
              </Col>
            </Row>
            <Seperator />

            <Row>
              <Col span={4}></Col>
              <Col span={12}>
                <Slider
                  min={1}
                  max={30}
                  onChange={onChangeSlider}
                  value={typeof level === "number" ? level : 1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={20}
                  style={{
                    margin: "0 16px",
                  }}
                  value={level}
                  onChange={onChangeSlider}
                />
              </Col>
            </Row>
            <Seperator />
            <HeroesTable heroesData={filteredHero} level={level} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
