const getColorAndNameOfAttribute = (attribute) => {
  switch (attribute) {
    case "agi":
      return ["green", "Agility"];
    case "str":
      return ["red", "Strength"];
    case "int":
      return ["blue", "Intelligence"];
    default:
      return ["purple", "Universal"];
  }
};

export default getColorAndNameOfAttribute;
