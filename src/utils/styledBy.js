export const styledBy = (property, mapping) => props => {
  return mapping[props[property]];
};
