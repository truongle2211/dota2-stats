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
  };
};
