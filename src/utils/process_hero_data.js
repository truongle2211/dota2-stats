export const processHeroData = (hero) => {
  return {
    key: hero.id,
    id: { name: hero.localized_name, icon: hero.icon },
    attribute: hero.primary_attr,
    str: hero.base_str,
    agi: hero.base_agi,
    int: hero.base_int,
    str_gain: hero.str_gain,
    agi_gain: hero.agi_gain,
    int_gain: hero.int_gain,
    attack_min: hero.base_attack_min,
    attack_max: hero.base_attack_max,
  };
};

const getAttackIncreaseFromStat = (herodata, str, agi, int) => {
  switch (herodata.attribute) {
    case "agi":
      return agi;
    case "str":
      return str;
    case "int":
      return int;
    default:
      return 0.7 * (agi + str + int);
  }
};

export const getHeroStatWithLevel = (herodata, level) => {
  const { str, agi, int } = herodata;

  const newStrength = Number((str + level * herodata.str_gain).toFixed(2));
  const newAgi = Number((agi + level * herodata.agi_gain).toFixed(2));
  const newInt = Number((int + level * herodata.int_gain).toFixed(2));
  const attackIncreaseFromState = getAttackIncreaseFromStat(
    herodata,
    newStrength,
    newAgi,
    newInt
  );

  return {
    ...herodata,
    str: newStrength,
    agi: newAgi,
    int: newInt,
    attack_min: Number(herodata.attack_min + attackIncreaseFromState).toFixed(),
    attack_max: Number(herodata.attack_max + attackIncreaseFromState).toFixed(),
  };
};
