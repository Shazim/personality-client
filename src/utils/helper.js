export const camelCasetoNormal = (word) => {
  return word
    .split(/(?=[A-Z])/)
    .map((s) => s[0].toUpperCase() + s.slice(1) + " ")
    .join("");
};

export const getValueInLink = (data, index) => {
  let Link = data.split("/");
  return Link[index];
};
